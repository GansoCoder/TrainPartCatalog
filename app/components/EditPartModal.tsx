'use client';

import { useState } from 'react';
import { Part } from '@prisma/client';

type EditPartModalProps = {
  part: Part & { location: string | null };
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export default function EditPartModal({
  part,
  isOpen,
  onClose,
  onSuccess,
}: EditPartModalProps) {
  const [name, setName] = useState(part.name);
  const [description, setDescription] = useState(part.description);
  const [partNumber, setPartNumber] = useState(part.partNumber);
  const [location, setLocation] = useState(part.location || '');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(part.imageUrl);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      // Create a preview URL for the selected image
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      let imageUrl = part.imageUrl;
      
      if (selectedImage) {
        // First, upload the image
        const formData = new FormData();
        formData.append('file', selectedImage);
        
        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!uploadResponse.ok) {
          throw new Error('Failed to upload image');
        }

        const uploadData = await uploadResponse.json();
        imageUrl = uploadData.url;
      }

      // Then update the part with the image URL
      const response = await fetch(`/api/parts/${part.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
          partNumber,
          location,
          imageUrl,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update part');
      }

      setSelectedImage(null);
      onSuccess();
      onClose();
    } catch (error) {
      setError('Failed to update part. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl text-black font-bold mb-4">Editar Item</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="partNumber" className="block text-gray-700 font-medium mb-2">
              Nomenclatura
            </label>
            <input
              type="text"
              id="partNumber"
              value={partNumber}
              onChange={(e) => setPartNumber(e.target.value)}
              className="w-full px-3 py-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
              Localização
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
              Imagem
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {previewUrl && (
              <div className="mt-2">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="max-h-40 rounded object-contain"
                />
              </div>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Descrição
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              required
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
              disabled={isSubmitting}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Atualizando...' : 'Concluir'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 