import { api } from '@/lib/api'
import { cookies } from 'next/headers'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { EmptyMemories } from '@/components/EmptyMemories'
import { ButtonDelete } from '@/components/ButtonDelete'
dayjs.locale(ptBR)

interface MemoryProps {
  params: Readonly<{ id: string }>;
}

interface IMemory {
  id: string;
  coverUrl: string;
  content: string;
  createdAt: string;
}

export default async function Memory({ params }: MemoryProps): Promise<JSX.Element> {
  const { id } = params;
  const isAuthenticated = cookies().has('token');
  
  if (!isAuthenticated) {
    return <EmptyMemories />;
  }
  
  const token = cookies().get('token')?.value;
  
  const response = await api.get(`/memories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  const memory: IMemory = response.data;
  
  return memory ? (
    <div className="flex flex-1 flex-col justify-between p-6">
      <div className="flex flex-col gap-4">
        <Link
          href="/"
          className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
        >
          <ChevronLeft className="h-4 w-4" />
          voltar à timeline
        </Link>
        <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
          {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
        </time>
        <div className="flex items-center gap-4">
          <Image
            src={memory.coverUrl}
            alt=""
            width={592}
            height={280}
            className="aspect-video w-full rounded-lg object-cover"
          />
        </div>
        <p className="text-lg leading-relaxed text-gray-100">
          {memory.content}
        </p>
      </div>
      <div className="flex items-center gap-4 self-end">
        <ButtonDelete memoryId={memory.id} token={token} />
        <Link
          href={{
            pathname: `/memories/edit/${memory.id}`,
            query: { id: memory.id },
          }}
          className="inline-block self-end rounded-full bg-blue-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-blue-600"
        >
          EDITAR
        </Link>
      </div>
    </div>
  ) : (
    <EmptyMemories />
  );
}
