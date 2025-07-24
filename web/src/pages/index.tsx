import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  window.location.replace(`${siteConfig.baseUrl}docs/`);
}
