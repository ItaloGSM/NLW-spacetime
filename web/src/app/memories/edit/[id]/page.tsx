import { api } from '@/lib/api'
import { UpdateMemoryForm } from '../../../../components/UpdateMemoryForm'
import { ChevronLeft } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'

interface NewMemoryProps {
  params: { id: string };
}

interface IMemory {
  id: string;
  userId: string;
  coverUrl: string;
  content: string;
  isPublic: boolean;
}

export default async function NewMemory({ params }: NewMemoryProps): Promise<JSX.Element> {
  const { id } = params;
  const token = cookies().get('token')?.value;
  const response = await api.get(`/memories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const memory: IMemory = response.data;
  
  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar a timeline
      </Link>
      <UpdateMemoryForm
        IdIn={memory.id}
        mediaIn={memory.coverUrl}
        contentIn={memory.content}
        isPublicIn={memory.isPublic}
      />
    </div>
  );
}
