"use client"

import React from 'react';
import Image from 'next/image';
import circles from '../public/images/3circles.png';

export default function Method() {
  return (
    <div className="flex justify-center items-center">
        <Image src={circles} alt='Venn diagram'/>
    </div>
  );
}
