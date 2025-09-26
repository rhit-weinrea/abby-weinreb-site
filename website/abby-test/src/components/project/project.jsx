import React, { useState } from "react";
import styles from "./project.module.css";

export default function Project({
  title,
  description,
  images = [],
  alt = "",
  link,
  children,
  details
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  return (
    <article className={styles.project}>
      {images.length > 0 && (
        <div className={styles.imageGallery} aria-label={`${title} images`}>
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={alt ? `${alt} (${idx + 1})` : `${title} screenshot ${idx + 1}`}
              className={styles.image}
              tabIndex={0}
              onClick={() => setModalImg(src)}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") setModalImg(src);
              }}
              aria-label="Click to enlarge"
            />
          ))}
        </div>
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <div className={styles.description}>{description}</div>
        {details && (
          <>
            <button
              className="uniform-btn"
              onClick={() => setShowDetails((v) => !v)}
              aria-expanded={showDetails}
              aria-controls={`details-${title.replace(/\s+/g, "-")}`}
            >
              {showDetails ? "Show Less" : "Read More"}
            </button>
            {showDetails && (
              <div
                id={`details-${title.replace(/\s+/g, "-")}`}
                className={styles.details}
              >
                {details}
              </div>
            )}
          </>
        )}
        {children}
      </div>
      {modalImg && (
        <div
          className={styles.modal}
          tabIndex={-1}
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalImg(null);
          }}
          onKeyDown={e => {
            if (e.key === "Escape") setModalImg(null);
          }}
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
        >
          <h3 id="modal-title" className="sr-only">Enlarged project image</h3>
          <p id="modal-desc" className="sr-only">Press Escape or click the close button to close this modal</p>
          <img src={modalImg} alt="Enlarged project screenshot" className={styles.modalImg} />
          <button
            className={styles.closeModal}
            onClick={() => setModalImg(null)}
            aria-label="Close image modal"
            autoFocus
          >
            ×
          </button>
        </div>
      )}
    </article>
  );
}