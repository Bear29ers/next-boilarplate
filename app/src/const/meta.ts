import type { Meta } from '@/types/meta';

const meta: Meta = {
  title: process.env.NEXT_PUBLIC_TITLE || 'Bear29ers（Yuta Okuma）',
  description: process.env.NEXT_PUBLIC_DESCRIPTION || 'This site is...',
  url: process.env.NEXT_PUBLIC_BASE_URL || '',
  type: process.env.NEXT_PUBLIC_TYPE || 'website',
  favicon: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico',
  imagePath: process.env.NEXT_PUBLIC_IMAGE_PATH || '',
  imageWidth: process.env.NEXT_PUBLIC_IMAGE_WIDTH || '',
  imageHeight: process.env.NEXT_PUBLIC_IMAGE_HEIGHT || '',
};

export default meta;
