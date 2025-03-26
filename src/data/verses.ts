
export interface Verse {
  id: number;
  surah: string;
  ayah: string;
  arabicText: string;
  translation: string;
  explanation: string;
  category: string;
  reference: string;
}

export const verses: Verse[] = [
  {
    id: 1,
    surah: "Al-Anbya",
    ayah: "21:30",
    arabicText: "أَوَلَمْ يَرَ الَّذِينَ كَفَرُوا أَنَّ السَّمَاوَاتِ وَالْأَرْضَ كَانَتَا رَتْقًا فَفَتَقْنَاهُمَا ۖ وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ۖ أَفَلَا يُؤْمِنُونَ",
    translation: "Have those who disbelieved not considered that the heavens and the earth were a joined entity, and We separated them and made from water every living thing? Then will they not believe?",
    explanation: "This verse describes the beginning of the universe in a way that aligns with the modern Big Bang theory, which states that the universe began as a singularity before expanding. It also mentions that all living things are made from water, which modern science confirms as water is essential for all known forms of life.",
    category: "Cosmology",
    reference: "Big Bang Theory & Origin of Life"
  },
  {
    id: 2,
    surah: "Adh-Dhariyat",
    ayah: "51:47",
    arabicText: "وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوسِعُونَ",
    translation: "And the heaven We constructed with strength, and indeed, We are [its] expander.",
    explanation: "Modern astronomy has confirmed that the universe is indeed expanding, a fact only discovered in the 20th century by Edwin Hubble. This verse, revealed 1400 years ago, describes this expansion of the universe.",
    category: "Cosmology",
    reference: "Expanding Universe Theory"
  },
  {
    id: 3,
    surah: "Al-Hadid",
    ayah: "57:25",
    arabicText: "وَأَنزَلْنَا الْحَدِيدَ فِيهِ بَأْسٌ شَدِيدٌ وَمَنَافِعُ لِلنَّاسِ",
    translation: "And We sent down iron, wherein is great military might and benefits for the people",
    explanation: "The Quran describes iron as being 'sent down', indicating its extraterrestrial origin. Modern science has confirmed that iron on Earth came from outer space, from massive stars that exploded billions of years ago. The atomic number of iron is 26, which corresponds to the position of this verse (25) and chapter.",
    category: "Geology",
    reference: "Origin of Iron"
  },
  {
    id: 4,
    surah: "Ar-Rahman",
    ayah: "55:19-20",
    arabicText: "مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ. بَيْنَهُمَا بَرْزَخٌ لَّا يَبْغِيَانِ",
    translation: "He released the two seas, meeting [side by side]; Between them is a barrier [so] neither of them transgresses.",
    explanation: "This verse describes the phenomenon where two seas meet but do not mix completely due to a barrier. Modern oceanography has discovered that between two different seas there is a barrier which divides them, each sea maintaining its own temperature, salinity, and density.",
    category: "Oceanography",
    reference: "Hydrological Barriers"
  },
  {
    id: 5,
    surah: "At-Tariq",
    ayah: "86:11",
    arabicText: "وَالسَّمَاءِ ذَاتِ الرَّجْعِ",
    translation: "By the sky which returns [rain]",
    explanation: "This verse refers to the water cycle, where the atmosphere returns water back to Earth in the form of rain. Modern meteorology has only fully understood the water cycle in recent centuries.",
    category: "Meteorology",
    reference: "The Water Cycle"
  },
  {
    id: 6,
    surah: "Al-Alaq",
    ayah: "96:15-16",
    arabicText: "كَلَّا لَئِن لَّمْ يَنتَهِ لَنَسْفَعًا بِالنَّاصِيَةِ. نَاصِيَةٍ كَاذِبَةٍ خَاطِئَةٍ",
    translation: "No! If he does not desist, We will surely drag him by the forelock - A lying, sinning forelock.",
    explanation: "The Quran describes the front of the brain (the forelock or nasiyah) as the area responsible for lying and sinful behavior. Modern neuroscience has discovered that the prefrontal cortex, located at the front of the brain, is indeed responsible for decision-making, planning complex cognitive behavior, and personality expression.",
    category: "Neuroscience",
    reference: "Prefrontal Cortex Function"
  }
];
