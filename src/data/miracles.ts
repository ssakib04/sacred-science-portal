
export interface Miracle {
  id: number;
  title: string;
  description: string;
  numericalDetails: {
    type: string;
    data: { label: string; value: number }[];
  };
  reference: string;
  category: string;
}

export const miracles: Miracle[] = [
  {
    id: 1,
    title: "Angels and Devils Balance",
    description: "The Quran mentions angels (malaika) and their opposites, the devils/satan (shaytan), exactly the same number of times, showing a perfect balance between these opposing forces.",
    numericalDetails: {
      type: "comparison",
      data: [
        { label: "Angels (Malaika)", value: 88 },
        { label: "Devils (Shaytan)", value: 88 }
      ]
    },
    reference: "Throughout the Quran",
    category: "Word Count"
  },
  {
    id: 2,
    title: "The Iron Verse Miracle",
    description: "The chapter about Iron (Al-Hadid) is the 57th chapter in the Quran. Remarkably, the atomic number of iron is 57. Furthermore, the verse that mentions iron is the 25th verse, which corresponds to the atomic weight of iron's most stable isotope.",
    numericalDetails: {
      type: "correlation",
      data: [
        { label: "Surah Number", value: 57 },
        { label: "Atomic Number of Iron", value: 26 },
        { label: "Verse Mentioning Iron", value: 25 },
        { label: "Atomic Weight (Approx.)", value: 56 }
      ]
    },
    reference: "Surah Al-Hadid (57:25)",
    category: "Scientific"
  },
  {
    id: 3,
    title: "Life and Death Balance",
    description: "The words 'life' (hayat) and 'death' (mawt) are each mentioned exactly 145 times in the Quran, showing the perfect balance between these two states of existence.",
    numericalDetails: {
      type: "comparison",
      data: [
        { label: "Life (Hayat)", value: 145 },
        { label: "Death (Mawt)", value: 145 }
      ]
    },
    reference: "Throughout the Quran",
    category: "Word Count"
  },
  {
    id: 4,
    title: "Earth and Sea Balance",
    description: "The word 'land/earth' (al-barr) is mentioned 13 times in the Quran, while 'sea' (al-bahr) is mentioned 32 times. The sum (45) represents the total, and the ratio of sea to land is 71% to 29%, which corresponds almost exactly to the actual ratio of water to land on Earth's surface.",
    numericalDetails: {
      type: "ratio",
      data: [
        { label: "Land (Al-Barr)", value: 13 },
        { label: "Sea (Al-Bahr)", value: 32 },
        { label: "Sea Percentage", value: 71 },
        { label: "Land Percentage", value: 29 }
      ]
    },
    reference: "Throughout the Quran",
    category: "Scientific"
  },
  {
    id: 5,
    title: "Day & Month Cycles",
    description: "The word 'day' (yawm) is mentioned 365 times in the Quran, corresponding to the number of days in a solar year. The word 'month' (shahr) appears 12 times, corresponding to the number of months in a year.",
    numericalDetails: {
      type: "correlation",
      data: [
        { label: "Day (Yawm)", value: 365 },
        { label: "Month (Shahr)", value: 12 },
        { label: "Days in Solar Year", value: 365 },
        { label: "Months in Year", value: 12 }
      ]
    },
    reference: "Throughout the Quran",
    category: "Astronomical"
  },
  {
    id: 6,
    title: "Man and Woman Balance",
    description: "The words 'man' and 'woman' each appear exactly 24 times in the Quran, showing the perfect balance between genders in divine creation.",
    numericalDetails: {
      type: "comparison",
      data: [
        { label: "Man", value: 24 },
        { label: "Woman", value: 24 }
      ]
    },
    reference: "Throughout the Quran",
    category: "Word Count"
  },
  {
    id: 7,
    title: "World and Hereafter",
    description: "The terms for 'world' (dunya) and 'hereafter' (akhirah) each appear exactly 115 times, highlighting the Quran's equal emphasis on both our worldly life and the afterlife.",
    numericalDetails: {
      type: "comparison",
      data: [
        { label: "World (Dunya)", value: 115 },
        { label: "Hereafter (Akhirah)", value: 115 }
      ]
    },
    reference: "Throughout the Quran",
    category: "Word Count"
  },
  {
    id: 8,
    title: "The Number 19 Miracle",
    description: "The number 19 forms a remarkable numerical pattern throughout the Quran. The Basmala (first verse) has 19 letters in Arabic, and many key words appear in multiples of 19.",
    numericalDetails: {
      type: "correlation",
      data: [
        { label: "Letters in Basmala", value: 19 },
        { label: "Quran Chapters", value: 114 },
        { label: "114 ÷ 19", value: 6 },
        { label: "Occurrences of 'Rahman'", value: 57 },
        { label: "57 ÷ 19", value: 3 }
      ]
    },
    reference: "Surah Al-Muddathir (74:30)",
    category: "Mathematical"
  },
  {
    id: 9,
    title: "Seven Heavens Mention",
    description: "The phrase 'seven heavens' appears exactly 7 times in the Quran, establishing a correlation between the numerical value and the concept described.",
    numericalDetails: {
      type: "correlation",
      data: [
        { label: "Phrase 'Seven Heavens'", value: 7 },
        { label: "Atmospheric Layers", value: 7 }
      ]
    },
    reference: "Throughout the Quran",
    category: "Scientific"
  },
  {
    id: 10,
    title: "Moon and Solar References",
    description: "The word 'moon' (qamar) appears 12 times in the Quran, matching the 12 lunar months in a year, while 'sun' (shams) appears more frequently, highlighting its greater prominence in our daily life.",
    numericalDetails: {
      type: "correlation",
      data: [
        { label: "Moon (Qamar)", value: 12 },
        { label: "Lunar Months", value: 12 },
        { label: "Sun (Shams)", value: 33 }
      ]
    },
    reference: "Throughout the Quran",
    category: "Astronomical"
  },
  {
    id: 11,
    title: "Day and Its Plural Forms",
    description: "The singular form 'day' (yawm) appears 365 times, matching the solar year, while the plural form 'days' (ayyam) appears 30 times, corresponding to the average month length.",
    numericalDetails: {
      type: "correlation",
      data: [
        { label: "Day (Yawm)", value: 365 },
        { label: "Days in Year", value: 365 },
        { label: "Days (Ayyam)", value: 30 },
        { label: "Average Days in Month", value: 30 }
      ]
    },
    reference: "Throughout the Quran",
    category: "Astronomical"
  },
  {
    id: 12,
    title: "Gematrical Values (Abjad)",
    description: "In Arabic, each letter has a numerical value. The phrase 'Bismillah' (In the name of Allah) has a total numerical value of 786, which has significance in Islamic tradition.",
    numericalDetails: {
      type: "calculation",
      data: [
        { label: "Bismillah Value", value: 786 },
        { label: "Al-Rahman Value", value: 298 },
        { label: "Al-Rahim Value", value: 258 },
        { label: "Sum of Rahman & Rahim", value: 556 }
      ]
    },
    reference: "Arabic Abjad System",
    category: "Linguistic"
  }
];
