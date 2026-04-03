import { Upload } from 'lucide-react';

export default function Playground() {
  return (
    <section className="playground-section animate-reveal stagger-3">
      <div className="container">
        <div className="playground-card">
          <div className="playground-content">
            <div className="playground-icon-wrapper">
              <Upload size={48} className="playground-icon" />
            </div>
            <p className="playground-text">
              Drop a project link or file to explore the codebase
            </p>
            <p className="playground-subtext">
              or click to browse
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
