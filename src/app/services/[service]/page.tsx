import { notFound } from 'next/navigation';

type Params = {
  params: {
    service: string;
  };
};

const serviceDetails: Record<string, { title: string; content: string }> = {
  engineering: {
    title: 'Engineering Services',
    content: 'Details about engineering services...',
  },
  procurement: {
    title: 'Procurement Services',
    content: 'Details about procurement services...',
  },
  construction: {
    title: 'Construction & Fabrication',
    content: 'Details about construction and fabrication...',
  },
  installation: {
    title: 'Installation & Commissioning',
    content: 'Details about installation and commissioning...',
  },
  maintenance: {
    title: 'Maintenance & Repair',
    content: 'Details about maintenance and repair...',
  },
  environmental: {
    title: 'Environmental Compliance',
    content: 'Details about environmental compliance...',
  },
};

// ✅ Required for dynamic routes
export function generateStaticParams() {
  return Object.keys(serviceDetails).map((service) => ({ service }));
}

export default function ServiceDetail({ params }: Params) {
  const serviceData = serviceDetails[params.service];

  if (!serviceData) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{serviceData.title}</h1>
      <p className="text-gray-700 text-lg">{serviceData.content}</p>
    </div>
  );
}
