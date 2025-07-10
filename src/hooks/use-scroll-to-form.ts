
"use client";

export function useScrollToForm() {
  const handleScrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return handleScrollToForm;
}
