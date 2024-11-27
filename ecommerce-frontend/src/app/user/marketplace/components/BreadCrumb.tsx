import React from 'react';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

type Props = {
  firstPath: string;
  firstName: string;
  secondPath: string;
  secondName: string;
  thirdPath?: string;
  thirdName?: string;
};

const BreadCrumb = ({ firstPath, firstName, secondPath, secondName, thirdPath, thirdName }: Props) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href={firstPath}>{firstName}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href={secondPath}>{secondName}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {thirdPath && thirdName && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href={thirdPath}>{thirdName}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumb;
