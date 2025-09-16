"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import styles from './Breadcrumb.module.css';

export default function Breadcrumb() {
  const pathname = usePathname();
  
  // Generate breadcrumb items based on the current path
  const generateBreadcrumbs = () => {
    // Remove trailing slash
    const path = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    
    // Split the path into segments
    const segments = path.split('/').filter(segment => segment);
    
    // Create breadcrumb items
    const breadcrumbs = [
      { name: 'Home', path: '/' }
    ];
    
    let currentPath = '';
    
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Format the segment name (replace hyphens with spaces and capitalize)
      const formattedName = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        name: formattedName,
        path: currentPath
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbs = generateBreadcrumbs();
  
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol className={styles.breadcrumbList}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.path} className={styles.breadcrumbItem}>
            {index === 0 ? (
              <Link href={breadcrumb.path} className={styles.breadcrumbLink}>
                <FaHome className={styles.homeIcon} />
                <span className={styles.srOnly}>Home</span>
              </Link>
            ) : (
              <>
                <FaChevronRight className={styles.separator} aria-hidden="true" />
                {index === breadcrumbs.length - 1 ? (
                  <span className={styles.currentPage} aria-current="page">
                    {breadcrumb.name}
                  </span>
                ) : (
                  <Link href={breadcrumb.path} className={styles.breadcrumbLink}>
                    {breadcrumb.name}
                  </Link>
                )}
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
