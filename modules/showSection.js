export default function showSection(sectionId) {
  const section1 = document.getElementById('books');
  const section2 = document.getElementById('section2');
  const section3 = document.getElementById('section3');

  if (sectionId === 'section1') {
    section1.classList.remove('hidden');
    section2.classList.add('hidden');
    section3.classList.add('hidden');
  } else if (sectionId === 'section2') {
    section1.classList.add('hidden');
    section2.classList.remove('hidden');
    section3.classList.add('hidden');
  } else if (sectionId === 'section3') {
    section1.classList.add('hidden');
    section2.classList.add('hidden');
    section3.classList.remove('hidden');
  }
}
