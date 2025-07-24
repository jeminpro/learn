
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Redirect } from '@docusaurus/router';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const url = `${siteConfig.baseUrl}docs/`;
  return <Redirect to={url} />;
}