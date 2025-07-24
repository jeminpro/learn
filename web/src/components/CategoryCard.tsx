import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './CategoryCards.module.css';

type Props = {
  to: string;
  title: string;
};

export default function CategoryCard({ to, title }: Props) {
  const link = useBaseUrl(to);
  return (
    <a className={styles.card} href={link}>
      <div>
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>
    </a>
  );
}
