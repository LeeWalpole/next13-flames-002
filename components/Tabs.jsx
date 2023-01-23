// import styles from '@/styles/NavLeft.module.css';
import Link from 'next/link';
import { useRouter } from "next/router";

const Tab1 = () => (
    <Router>
      <Link
        key="tab1"
        href="/tab1"
        className="tab"
        jsx={[styles, selectedStyles]}
      >
        Tab 1
      </Link>
      <Tab1Content />
    </Router>
  );
  
  const Tab2 = () => (
    <Router>
      <Link
        key="tab2"
        href="/tab2"
        className="tab"
        jsx={styles}
      >
        Tab 2
      </Link>
      <Tab2Content />
    </Router>
  );

  const styles = (
    <style jsx global>{`
      .tab {
        display: inline-block;
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-bottom: none;
        text-align: center;
        cursor: pointer;
      }
  
      .tab:hover {
        background: #f0f0f0;
      }
    `}</style>
  );