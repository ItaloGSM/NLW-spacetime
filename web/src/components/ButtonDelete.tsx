'use client'
import { api } from '@/lib/api'

interface Props {
  memoryId: string;
  token: string | undefined;
}

export function ButtonDelete({ memoryId, token }: Readonly<Props>): JSX.Element {
  const handleDelete = async () => {
    await api.delete(`/memories/${memoryId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <a
      href="/"
      className="inline-block self-end rounded-full bg-red-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-red-600"
      onClick={handleDelete}
    >
      EXCLUIR
    </a>
  );
}
