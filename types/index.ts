import React from 'react'

export interface SearchVenueProps {
    venue: string;
    setVenue: (venue: string) => void;
}