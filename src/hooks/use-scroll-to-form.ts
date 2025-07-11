
"use client";

export function useScrollToForm() {
  const handleScrollToForm = () => {
    if (typeof document !== 'undefined') {
      document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return handleScrollToForm;
}
