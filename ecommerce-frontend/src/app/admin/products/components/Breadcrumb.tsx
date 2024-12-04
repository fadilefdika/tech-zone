import { Breadcrumb as BreadcrumbUI, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

interface Props {
  name: string;
}

const Breadcrumb = ({ name }: Props) => {
  return (
    <BreadcrumbUI className="flex items-center text-sm text-gray-600">
      <BreadcrumbList className="flex items-center space-x-1">
        <BreadcrumbItem>
          <BreadcrumbLink href="/admin/products" className="hover:text-blue-500 transition-colors duration-200">
            Daftar Produk
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <span className="text-gray-400 text-xl font-light">/</span>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="font-medium text-black">{name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </BreadcrumbUI>
  );
};

export default Breadcrumb;
