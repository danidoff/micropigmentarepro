"use client";

import React, { useState } from 'react';
import faqsData from '../data/faqs.json';
import styles from '../styles/FaqAccordion.module.css';

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  console.log('Initial activeIndex:', activeIndex);

  const handleTitleClick = (index) => {
    console.log('Button clicked, index:', index);
    const newActiveIndex = activeIndex === index ? null : index;
    setActiveIndex(newActiveIndex);
    console.log('New activeIndex:', newActiveIndex);
  };

  if (!faqsData || !Array.isArray(faqsData) || !faqsData[0] || !faqsData[0].listItems) {
    return <div className="text-red-500">Error loading FAQs.</div>;
  }

  return (
    <section className={`${styles.container} ${styles.faqSection} flex flex-col`}>
      <h2 className={styles.title}>{faqsData[0].title}</h2>
      {faqsData[0].listItems.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <button className={styles.questionButton}
            onClick={(event) => { event.preventDefault(); handleTitleClick(index); }}
          >
            <p>{faq.title}</p> {/* Wrapped faq.title in <p> */}
             <svg
              className={`${styles.arrowIconBase} ${activeIndex === index ? styles.arrowIconRotate180 : styles.arrowIconRotate0}`}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
           

          </button>
          <div
            className={`${styles.answerContainer} ${
              activeIndex === index ? styles.answerContainerOpen : styles.answerContainerClosed
            }`}
          >
            <div className="pb-4 text-white">
              {faq.items.map((item, itemIndex) => (
                <p key={itemIndex}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FaqAccordion;