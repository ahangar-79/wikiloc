'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';

export default function CreateRoute() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const t = useTranslations('Form');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // فرض بر ثبت مسیر
    router.push('/routes');
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <header className="mb-10">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-lg font-semibold mb-2">
            {t('titleLabel')}
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-lg font-semibold mb-2">
            {t('descriptionLabel')}
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          {t('submit')}
        </button>
      </form>
    </main>
  );
}
