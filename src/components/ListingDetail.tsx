'use client'
import React, { useState } from "react";
import Modal from "./Modal";
import BookingForm from "./BookingForm";
import Breadcrumb from "./Breadcrumb";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import { ColorTokens } from "../theme/colors";
import Image from 'next/image';


interface ListingDetailProps {
  id: number | string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  gallery?: string[];
  mapUrl?: string;
  price?: string;
  category?: { id: number; name: string };
}


const ListingDetail: React.FC<ListingDetailProps> = ({ id, image, title, subtitle, description, gallery, mapUrl, price, category }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const images = gallery && gallery.length > 0 ? gallery : [];

  const openLightbox = (idx: number) => {
    setLightboxIdx(idx);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const prevImg = () => setLightboxIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImg = () => setLightboxIdx((i) => (i === images.length - 1 ? 0 : i + 1));

  const router = useRouter();
  const handleBookNow = () => {
    setModalOpen(true);
    setBookingSuccess(false);
  };
  const handleBookingSuccess = () => {
    setBookingSuccess(true);
    setTimeout(() => setModalOpen(false), 1200);
  };
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
  <div className="flex-1 max-w-3xl mx-auto py-10 px-4 w-full max-w-full overflow-x-hidden">
        <div className="mb-4">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Listings", href: "/listings" },
            { label: title }
          ]} />
        </div>
        <button
          onClick={() => router.back()}
          className="mb-4 flex items-center gap-2 text-purple font-semibold hover:underline hover:text-darkPurple transition"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          Back
        </button>
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-lightGray">
          {/* Featured Image */}
          <Image src={image} alt={title} width={800} height={288} className="w-full h-72 object-cover" priority />
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-darkGray mb-2">{title}</h1>
            <h2 className="text-lg text-blue font-semibold mb-4">{subtitle}</h2>
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-1 text-darkGray">About</h3>
              <p className="text-gray text-base leading-relaxed">{description}</p>
            </div>
            {/* Gallery under About */}
            {images.length > 0 && (
              <div className="w-full flex overflow-x-auto gap-2 p-2 mb-6">
                {images.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    alt={title}
                    width={256}
                    height={160}
                    className="h-40 w-64 object-cover rounded-xl flex-shrink-0 border border-lightGray cursor-pointer hover:opacity-80 transition"
                    onClick={() => openLightbox(idx)}
                  />
                ))}
              </div>
            )}
            {mapUrl && (
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-6 px-6 py-2 rounded-lg font-semibold shadow transition"
                style={{ background: ColorTokens.purple, color: ColorTokens.white }}
              >
                Show on Map
              </a>
            )}
          </div>
          {/* Footer with price and book button */}
          <div className="flex items-center justify-between bg-lightGray px-8 py-4 border-t border-gray-200">
            <span className="text-xl font-bold text-darkGray">{price ? price : ''}</span>
            <button
              className="px-8 py-3 rounded-xl font-semibold shadow transition"
              style={{ background: ColorTokens.purple, color: ColorTokens.white }}
              onClick={handleBookNow}
            >
              Book Now
            </button>
      {/* Booking Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <BookingForm
          listingId={String(id)}
          listingName={title}
          categoryName={category?.name || ''}
          onSuccess={handleBookingSuccess}
          onClose={() => setModalOpen(false)}
        />
        {bookingSuccess && (
          <div className="text-green-600 mt-2 text-center">Booking successful!</div>
        )}
      </Modal>
          </div>
        </div>
      </div>
      {/* Lightbox Modal */}
      {lightboxOpen && images.length > 0 && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button className="absolute top-6 right-8 text-white text-3xl font-bold" onClick={closeLightbox}>&times;</button>
          <button className="absolute left-4 md:left-16 text-white text-4xl font-bold px-2 py-1" onClick={prevImg}>&#8592;</button>
          <Image
            src={images[lightboxIdx]}
            alt="Gallery"
            width={900}
            height={800}
            className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl border-4 border-white"
            priority
          />
          <button className="absolute right-4 md:right-16 text-white text-4xl font-bold px-2 py-1" onClick={nextImg}>&#8594;</button>
        </div>
      )}
    </div>
  );
};

export default ListingDetail;
