import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import FooterV1 from '@/src/components/footer/FooterV1';
import Hero from '@/src/components/Hero/Hero';
import CostEstimationWidgetPrompt from '@/src/components/service/CostEstimationWidgetPrompt';
import { getServiceContent } from '@/src/lib/data';
import NotFound from '../../../not-found';
import styles from './style.module.css';
import SuburbMap from '@/src/components/SuburbMap';
import QuoteSection from '@/src/components/QuoteSection';
import Image from 'next/image';

const areas = [
  { name: 'sydney-cbd', desc: '[SERVICE] services in the heart of Sydney, designed for apartments, townhouses, and commercial buildings.', lat: -33.8688, lng: 151.2093 },
  { name: 'inner-west-council', desc: 'The Inner West’s trusted team for reliable, efficient [SERVICE] for urban homes and strata buildings.', lat: -33.8964, lng: 151.1400 },
  { name: 'bayside-council', desc: 'Providing expert [SERVICE] services across Bayside to enhance homes with fresh, durable finishes.', lat: -33.9590, lng: 151.2234 },
  { name: 'randwick-council', desc: 'Expert [SERVICE] in Randwick to refresh and protect against sea air, heavy rains, and wear.', lat: -33.9142, lng: 151.2410 },
  { name: 'northern-beaches-council', desc: 'Offering weather-resistant [SERVICE] for Northern Beaches homes exposed to coastal elements.', lat: -33.7511, lng: 151.2874 },
  { name: 'mosman-council', desc: 'Premium [SERVICE] solutions in Mosman for high-end homes and coastal properties.', lat: -33.8278, lng: 151.2443 },
  { name: 'north-sydney-council', desc: 'Revitalizing North Sydney homes with top-quality [SERVICE] for dense urban environments.', lat: -33.8346, lng: 151.2071 },
  { name: 'willoughby-council', desc: 'Offering fast, efficient [SERVICE] across Willoughby to beautify homes with lasting color.', lat: -33.8050, lng: 151.2000 },
  { name: 'lane-cove-council', desc: 'Keeping Lane Cove properties vibrant with tailored [SERVICE] and surface enhancement solutions.', lat: -33.8130, lng: 151.1700 },
  { name: 'ku-ring-gai-council', desc: '[SERVICE] services in Ku-ring-gai built to last—ideal for leafy suburbs and multi-level properties.', lat: -33.7333, lng: 151.0833 },
  { name: 'hornsby-council', desc: 'Delivering professional [SERVICE] in Hornsby to refresh homes against weather and time.', lat: -33.7036, lng: 151.1009 },
  { name: 'ryde-council', desc: 'Protecting Ryde properties with smart [SERVICE] systems for interiors, exteriors, and more.', lat: -33.8118, lng: 151.1060 },
  { name: 'hunters-hill-council', desc: 'Hunters Hill homes are revitalized by our expert [SERVICE]—tailored for heritage and modern properties alike.', lat: -33.8333, lng: 151.1397 },
  { name: 'hills-shire-council', desc: 'The Hills District trusts Contact Building Services for high-quality, long-lasting [SERVICE] transformations.', lat: -33.7400, lng: 150.9900 },
  { name: 'blacktown-council', desc: 'Blacktown residents trust us for reliable, vibrant [SERVICE] solutions for all property types.', lat: -33.7710, lng: 150.9080 },
];

const subSuburbsByArea = {
  'sydney-cbd': [
    { name: 'Barangaroo', desc: 'Providing professional [SERVICE] in Barangaroo for modern apartments, offices, and waterfront properties.', lat: -33.8614, lng: 151.2017 },
    { name: 'The Rocks', desc: 'Expert [SERVICE] services in The Rocks for heritage buildings, pubs, and historic homes.', lat: -33.86, lng: 151.208 },
    { name: 'Millers Point', desc: '[SERVICE] solutions in Millers Point designed to refresh colonial architecture and contemporary residences.', lat: -33.86, lng: 151.210 },
    { name: 'Haymarket', desc: 'Delivering vibrant [SERVICE] in Haymarket for bustling commercial spaces and urban apartments.', lat: -33.880, lng: 151.210 },
    { name: 'Ultimo', desc: 'Trusted [SERVICE] in Ultimo to enhance student accommodations, tech hubs, and creative studios.', lat: -33.8792, lng: 151.1969 },
    { name: 'Pyrmont', desc: 'Professional [SERVICE] services in Pyrmont for harborside homes, casinos, and media offices.', lat: -33.8692, lng: 151.1924 },
    { name: 'Woolloomooloo', desc: '[SERVICE] experts in Woolloomooloo, protecting wharf apartments and luxury residences from coastal wear.', lat: -33.8692, lng: 151.225 },
    { name: 'Darlinghurst', desc: 'Comprehensive [SERVICE] in Darlinghurst for trendy cafes, Victorian terraces, and nightlife venues.', lat: -33.880, lng: 151.220 },
    { name: 'Surry Hills', desc: 'Tailored [SERVICE] in Surry Hills, revitalizing creative agencies, boutiques, and inner-city homes.', lat: -33.880, lng: 151.220 },
    { name: 'Potts Point', desc: 'High-quality [SERVICE] in Potts Point for elegant apartments, hotels, and art deco buildings.', lat: -33.870, lng: 151.224 },
    { name: 'Redfern', desc: 'Reliable [SERVICE] services in Redfern for street art-inspired homes, warehouses, and community spaces.', lat: -33.8917, lng: 151.2083 },
    { name: 'Glebe', desc: 'Expert [SERVICE] in Glebe to preserve bohemian charm in terraces, markets, and university surrounds.', lat: -33.8778, lng: 151.185 },
  ],
  'inner-west-council': [
    { name: 'Newtown', desc: 'Providing professional [SERVICE] in Newtown for terraces, bathrooms, and apartment buildings prone to wear.', lat: -33.900, lng: 151.180 },
    { name: 'Marrickville', desc: 'Expert [SERVICE] services in Marrickville for homes, units, and commercial properties.', lat: -33.910, lng: 151.160 },
    { name: 'Ashfield', desc: '[SERVICE] solutions in Ashfield designed to protect residential and commercial buildings from weather.', lat: -33.890, lng: 151.130 },
    { name: 'Leichhardt', desc: 'Delivering premium [SERVICE] across Leichhardt’s homes, units, and heritage properties.', lat: -33.880, lng: 151.160 },
    { name: 'Dulwich Hill', desc: 'Trusted [SERVICE] in Dulwich Hill to prevent damage and enhance homes.', lat: -33.900, lng: 151.140 },
    { name: 'Haberfield', desc: 'High-quality [SERVICE] in Haberfield for homes with tiled roofs, balconies, and older bathrooms.', lat: -33.880, lng: 151.140 },
    { name: 'Petersham', desc: 'Comprehensive [SERVICE] in Petersham for rooftops, basements, and strata-managed properties.', lat: -33.890, lng: 151.160 },
    { name: 'Stanmore', desc: '[SERVICE] experts in Stanmore, protecting inner-city homes from leaks and water ingress.', lat: -33.890, lng: 151.160 },
    { name: 'Annandale', desc: 'Delivering tailored [SERVICE] in Annandale, addressing specific needs of heritage and contemporary homes.', lat: -33.880, lng: 151.170 },
    { name: 'Balmain', desc: 'Specializing in [SERVICE] services in Balmain, protecting historic residences and modern homes.', lat: -33.860, lng: 151.180 },
    { name: 'Rozelle', desc: 'Offering professional [SERVICE] services in Rozelle, safeguarding properties from wear.', lat: -33.860, lng: 151.170 },
    { name: 'Enmore', desc: 'Vibrant [SERVICE] solutions in Enmore for creative spaces and residential properties.', lat: -33.900, lng: 151.170 },
  ],
  'bayside-council': [
    { name: 'Arncliffe', desc: 'Providing expert [SERVICE] in Arncliffe to enhance family homes and apartment complexes.', lat: -33.936, lng: 151.148 },
    { name: 'Banksia', desc: 'Expert [SERVICE] services in Banksia to revitalize suburban residences and local businesses.', lat: -33.945, lng: 151.142 },
    { name: 'Banksmeadow', desc: 'Industrial and commercial [SERVICE] solutions in Banksmeadow for warehouses and offices.', lat: -33.962, lng: 151.212 },
    { name: 'Bardwell Park', desc: 'Delivering durable [SERVICE] in Bardwell Park for parkside homes and units.', lat: -33.935, lng: 151.126 },
    { name: 'Bardwell Valley', desc: 'Trusted [SERVICE] in Bardwell Valley to protect valley homes from environmental wear.', lat: -33.933, lng: 151.133 },
    { name: 'Bexley', desc: 'High-quality [SERVICE] services in Bexley for heritage houses and modern apartments.', lat: -33.95, lng: 151.117 },
    { name: 'Bexley North', desc: 'Comprehensive [SERVICE] in Bexley North for family-oriented suburbs.', lat: -33.938, lng: 151.114 },
    { name: 'Botany', desc: 'Coastal [SERVICE] solutions in Botany to refresh homes near the bay.', lat: -33.946, lng: 151.196 },
    { name: 'Brighton-Le-Sands', desc: 'Beachside [SERVICE] in Brighton-Le-Sands for waterfront properties and restaurants.', lat: -33.96, lng: 151.158 },
    { name: 'Carlton', desc: 'Professional [SERVICE] in Carlton for residential and commercial spaces.', lat: -33.972, lng: 151.121 },
    { name: 'Daceyville', desc: 'Tailored [SERVICE] in Daceyville for garden city style homes.', lat: -33.93, lng: 151.225 },
    { name: 'Dolls Point', desc: 'Expert [SERVICE] in Dolls Point to enhance seaside apartments and houses.', lat: -33.994, lng: 151.145 },
  ],
  'randwick-council': [
    { name: 'Centennial Park', desc: 'Providing professional [SERVICE] in Centennial Park for luxury homes and park-adjacent properties.', lat: -33.896, lng: 151.232 },
    { name: 'Chifley', desc: 'Expert [SERVICE] services in Chifley to protect coastal residences from salt and wind.', lat: -33.967, lng: 151.241 },
    { name: 'Clovelly', desc: 'Beachside [SERVICE] solutions in Clovelly for apartments and family homes.', lat: -33.912, lng: 151.258 },
    { name: 'Coogee', desc: 'Vibrant [SERVICE] in Coogee for seaside units, cafes, and hotels.', lat: -33.92, lng: 151.255 },
    { name: 'Kensington', desc: 'Comprehensive [SERVICE] in Kensington for university surrounds and residential areas.', lat: -33.92, lng: 151.223 },
    { name: 'Kingsford', desc: 'Affordable [SERVICE] services in Kingsford for student housing and family dwellings.', lat: -33.924, lng: 151.228 },
    { name: 'La Perouse', desc: 'Durable [SERVICE] in La Perouse to withstand coastal conditions for historic sites.', lat: -34.0, lng: 151.233 },
    { name: 'Little Bay', desc: 'Premium [SERVICE] in Little Bay for modern developments and golf course views.', lat: -33.981, lng: 151.244 },
    { name: 'Malabar', desc: 'Protective [SERVICE] solutions in Malabar for beachfront properties.', lat: -33.962, lng: 151.248 },
    { name: 'Maroubra', desc: 'Expert [SERVICE] in Maroubra to refresh surfside homes and apartments.', lat: -33.95, lng: 151.237 },
    { name: 'Matraville', desc: 'Reliable [SERVICE] services in Matraville for suburban family homes.', lat: -33.963, lng: 151.231 },
    { name: 'Randwick', desc: 'Tailored [SERVICE] in Randwick for racecourse-adjacent residences and businesses.', lat: -33.914, lng: 151.241 },
  ],
  'northern-beaches-council': [
    { name: 'Avalon Beach', desc: 'Weather-resistant [SERVICE] in Avalon Beach for coastal homes and beach houses.', lat: -33.633, lng: 151.327 },
    { name: 'Bayview', desc: 'Premium [SERVICE] in Bayview for waterfront residences and luxury estates.', lat: -33.660, lng: 151.299 },
    { name: 'Bilgola Beach', desc: 'Expert [SERVICE] in Bilgola Beach to protect beachside properties from salt and wind.', lat: -33.645, lng: 151.323 },
    { name: 'Brookvale', desc: 'Comprehensive [SERVICE] in Brookvale for commercial spaces and urban homes.', lat: -33.762, lng: 151.274 },
    { name: 'Collaroy', desc: 'Durable [SERVICE] in Collaroy for seaside apartments and family dwellings.', lat: -33.732, lng: 151.300 },
    { name: 'Cromer', desc: 'Reliable [SERVICE] in Cromer for suburban residences and local businesses.', lat: -33.731, lng: 151.267 },
    { name: 'Dee Why', desc: 'Vibrant [SERVICE] in Dee Why for high-rise units and beachfront properties.', lat: -33.751, lng: 151.288 },
    { name: 'Freshwater', desc: 'Tailored [SERVICE] in Freshwater for coastal cottages and modern residences.', lat: -33.779, lng: 151.284 },
    { name: 'Manly', desc: 'Professional [SERVICE] in Manly for iconic apartments, hotels, and heritage buildings.', lat: -33.797, lng: 151.288 },
    { name: 'Mona Vale', desc: 'High-quality [SERVICE] in Mona Vale for family homes and recreational spaces.', lat: -33.678, lng: 151.304 },
    { name: 'Narrabeen', desc: 'Protective [SERVICE] in Narrabeen for lagoon-side properties and units.', lat: -33.713, lng: 151.297 },
    { name: 'Newport', desc: 'Expert [SERVICE] in Newport to refresh surfside homes and commercial venues.', lat: -33.656, lng: 151.313 },
  ],
  'mosman-council': [
    { name: 'Balmoral', desc: 'Premium [SERVICE] in Balmoral for high-end beachside homes and estates.', lat: -33.825, lng: 151.251 },
    { name: 'Beauty Point', desc: 'Expert [SERVICE] in Beauty Point for luxury waterfront properties.', lat: -33.813, lng: 151.234 },
    { name: 'Clifton Gardens', desc: 'Tailored [SERVICE] in Clifton Gardens for heritage residences and modern villas.', lat: -33.840, lng: 151.251 },
    { name: 'Georges Heights', desc: 'Durable [SERVICE] in Georges Heights for historic sites and family homes.', lat: -33.833, lng: 151.258 },
    { name: 'Middle Head', desc: 'Professional [SERVICE] in Middle Head for coastal defences and residential areas.', lat: -33.826, lng: 151.267 },
    { name: 'Mosman', desc: 'High-quality [SERVICE] in Mosman for elegant apartments and commercial spaces.', lat: -33.828, lng: 151.244 },
    { name: 'The Spit', desc: 'Vibrant [SERVICE] in The Spit for marina-adjacent properties and units.', lat: -33.804, lng: 151.244 },
    { name: 'Quakers Hat', desc: 'Reliable [SERVICE] in Quakers Hat for suburban homes and parkside dwellings.', lat: -33.812, lng: 151.243 },
  ],
  'north-sydney-council': [
    { name: 'Cammeray', desc: 'Expert [SERVICE] in Cammeray for urban apartments and family homes.', lat: -33.821, lng: 151.208 },
    { name: 'Cremorne', desc: 'Premium [SERVICE] in Cremorne for luxury residences and commercial buildings.', lat: -33.830, lng: 151.227 },
    { name: 'Cremorne Point', desc: 'Tailored [SERVICE] in Cremorne Point for waterfront properties and heritage sites.', lat: -33.841, lng: 151.229 },
    { name: 'Crows Nest', desc: 'Comprehensive [SERVICE] in Crows Nest for trendy cafes and residential spaces.', lat: -33.826, lng: 151.202 },
    { name: 'Kirribilli', desc: 'High-quality [SERVICE] in Kirribilli for harbour-view apartments and historic homes.', lat: -33.847, lng: 151.213 },
    { name: 'Kurraba Point', desc: 'Professional [SERVICE] in Kurraba Point for exclusive estates and units.', lat: -33.843, lng: 151.222 },
    { name: 'Lavender Bay', desc: 'Vibrant [SERVICE] in Lavender Bay for parkside homes and creative studios.', lat: -33.843, lng: 151.207 },
    { name: 'McMahons Point', desc: 'Reliable [SERVICE] in McMahons Point for harbour-adjacent residences.', lat: -33.845, lng: 151.203 },
    { name: 'Milsons Point', desc: 'Durable [SERVICE] in Milsons Point for high-rise buildings and offices.', lat: -33.846, lng: 151.212 },
    { name: 'Neutral Bay', desc: 'Expert [SERVICE] in Neutral Bay for modern apartments and boutiques.', lat: -33.837, lng: 151.219 },
    { name: 'North Sydney', desc: 'Tailored [SERVICE] in North Sydney for dense urban environments and commercial spaces.', lat: -33.835, lng: 151.207 },
    { name: 'Waverton', desc: 'Providing professional [SERVICE] in Waverton for residential and parkside properties.', lat: -33.838, lng: 151.199 },
  ],
  'willoughby-council': [
    { name: 'Artarmon', desc: 'Fast, efficient [SERVICE] in Artarmon for industrial and residential properties.', lat: -33.809, lng: 151.185 },
    { name: 'Castle Cove', desc: 'Tailored [SERVICE] in Castle Cove for leafy suburban homes.', lat: -33.786, lng: 151.206 },
    { name: 'Castlecrag', desc: 'Expert [SERVICE] in Castlecrag for heritage architecture and modern residences.', lat: -33.799, lng: 151.221 },
    { name: 'Chatswood', desc: 'Comprehensive [SERVICE] in Chatswood for high-rise apartments and commercial spaces.', lat: -33.800, lng: 151.181 },
    { name: 'Chatswood West', desc: 'Reliable [SERVICE] in Chatswood West for family homes and units.', lat: -33.794, lng: 151.164 },
    { name: 'Middle Cove', desc: 'Premium [SERVICE] in Middle Cove for coastal-adjacent properties.', lat: -33.792, lng: 151.213 },
    { name: 'Naremburn', desc: 'Vibrant [SERVICE] in Naremburn for urban terraces and apartments.', lat: -33.817, lng: 151.195 },
    { name: 'Northbridge', desc: 'Professional [SERVICE] in Northbridge for luxury estates and family dwellings.', lat: -33.812, lng: 151.220 },
    { name: 'Willoughby', desc: 'High-quality [SERVICE] in Willoughby for suburban homes and local businesses.', lat: -33.808, lng: 151.200 },
    { name: 'Willoughby East', desc: 'Durable [SERVICE] in Willoughby East for residential spaces and parks.', lat: -33.799, lng: 151.207 },
  ],
  'lane-cove-council': [
    { name: 'Greenwich', desc: 'Tailored [SERVICE] in Greenwich for harbour-view homes and units.', lat: -33.828, lng: 151.183 },
    { name: 'Lane Cove', desc: 'Expert [SERVICE] in Lane Cove for urban apartments and commercial areas.', lat: -33.813, lng: 151.170 },
    { name: 'Lane Cove North', desc: 'Reliable [SERVICE] in Lane Cove North for family residences and parks.', lat: -33.806, lng: 151.164 },
    { name: 'Lane Cove West', desc: 'Professional [SERVICE] in Lane Cove West for suburban homes.', lat: -33.816, lng: 151.154 },
    { name: 'Linley Point', desc: 'Premium [SERVICE] in Linley Point for exclusive waterfront properties.', lat: -33.824, lng: 151.156 },
    { name: 'Longueville', desc: 'High-quality [SERVICE] in Longueville for heritage houses and modern villas.', lat: -33.831, lng: 151.166 },
    { name: 'Northwood', desc: 'Vibrant [SERVICE] in Northwood for leafy suburban dwellings.', lat: -33.828, lng: 151.177 },
    { name: 'Riverview', desc: 'Durable [SERVICE] in Riverview for riverside homes and schools.', lat: -33.826, lng: 151.160 },
    { name: 'St Leonards', desc: 'Comprehensive [SERVICE] in St Leonards for high-rise buildings and offices.', lat: -33.823, lng: 151.194 },
  ],
  'ku-ring-gai-council': [
    { name: 'East Killara', desc: 'Expert [SERVICE] in East Killara for leafy suburban homes.', lat: -33.761, lng: 151.175 },
    { name: 'East Lindfield', desc: 'Tailored [SERVICE] in East Lindfield for family residences and gardens.', lat: -33.763, lng: 151.184 },
    { name: 'Gordon', desc: 'Professional [SERVICE] in Gordon for commercial spaces and units.', lat: -33.756, lng: 151.151 },
    { name: 'Killara', desc: 'High-quality [SERVICE] in Killara for luxury estates and apartments.', lat: -33.766, lng: 151.162 },
    { name: 'Lindfield', desc: 'Reliable [SERVICE] in Lindfield for heritage homes and modern dwellings.', lat: -33.775, lng: 151.169 },
    { name: 'North Turramurra', desc: 'Durable [SERVICE] in North Turramurra for bushland-adjacent properties.', lat: -33.713, lng: 151.146 },
    { name: 'North Wahroonga', desc: 'Vibrant [SERVICE] in North Wahroonga for suburban family homes.', lat: -33.704, lng: 151.125 },
    { name: 'Pymble', desc: 'Comprehensive [SERVICE] in Pymble for executive residences and schools.', lat: -33.744, lng: 151.142 },
    { name: 'Roseville Chase', desc: 'Premium [SERVICE] in Roseville Chase for coastal-view properties.', lat: -33.778, lng: 151.197 },
    { name: 'St Ives', desc: 'Expert [SERVICE] in St Ives for shopping centres and homes.', lat: -33.730, lng: 151.160 },
    { name: 'St Ives Chase', desc: 'Tailored [SERVICE] in St Ives Chase for gated communities and villas.', lat: -33.709, lng: 151.154 },
    { name: 'South Turramurra', desc: 'Reliable [SERVICE] in South Turramurra for residential areas and parks.', lat: -33.745, lng: 151.114 },
  ],
  'hornsby-council': [
    { name: 'Arcadia', desc: 'Expert [SERVICE] in Arcadia for rural properties and farms.', lat: -33.617, lng: 151.077 },
    { name: 'Asquith', desc: 'Reliable [SERVICE] in Asquith for suburban homes and units.', lat: -33.687, lng: 151.107 },
    { name: 'Beecroft', desc: 'Tailored [SERVICE] in Beecroft for heritage residences and gardens.', lat: -33.749, lng: 151.065 },
    { name: 'Berowra', desc: 'Durable [SERVICE] in Berowra for bushland homes and community spaces.', lat: -33.621, lng: 151.151 },
    { name: 'Berowra Heights', desc: 'Professional [SERVICE] in Berowra Heights for elevated properties.', lat: -33.612, lng: 151.137 },
    { name: 'Brooklyn', desc: 'Vibrant [SERVICE] in Brooklyn for riverside dwellings and marinas.', lat: -33.548, lng: 151.226 },
    { name: 'Cherrybrook', desc: 'High-quality [SERVICE] in Cherrybrook for family homes and schools.', lat: -33.702, lng: 151.046 },
    { name: 'Cowan', desc: 'Comprehensive [SERVICE] in Cowan for rural and train-adjacent properties.', lat: -33.593, lng: 151.171 },
    { name: 'Dural', desc: 'Premium [SERVICE] in Dural for acreage estates and commercial spaces.', lat: -33.683, lng: 151.023 },
    { name: 'Galston', desc: 'Expert [SERVICE] in Galston for rural residences and orchards.', lat: -33.653, lng: 151.018 },
    { name: 'Glenhaven', desc: 'Tailored [SERVICE] in Glenhaven for luxury homes and equestrian properties.', lat: -33.704, lng: 151.003 },
    { name: 'Glenorie', desc: 'Reliable [SERVICE] in Glenorie for countryside dwellings and farms.', lat: -33.602, lng: 151.009 },
  ],
  'ryde-council': [
    { name: 'Denistone', desc: 'Expert [SERVICE] in Denistone for suburban family homes.', lat: -33.798, lng: 151.089 },
    { name: 'Denistone East', desc: 'Reliable [SERVICE] in Denistone East for residential units and parks.', lat: -33.796, lng: 151.098 },
    { name: 'Denistone West', desc: 'Tailored [SERVICE] in Denistone West for modern dwellings.', lat: -33.801, lng: 151.080 },
    { name: 'East Ryde', desc: 'Professional [SERVICE] in East Ryde for riverside properties.', lat: -33.810, lng: 151.128 },
    { name: 'Eastwood', desc: 'High-quality [SERVICE] in Eastwood for commercial spaces and apartments.', lat: -33.792, lng: 151.056 },
    { name: 'Gladesville', desc: 'Vibrant [SERVICE] in Gladesville for harbour-view homes.', lat: -33.833, lng: 151.126 },
    { name: 'Macquarie Park', desc: 'Comprehensive [SERVICE] in Macquarie Park for tech hubs and units.', lat: -33.781, lng: 151.128 },
    { name: 'Marsfield', desc: 'Premium [SERVICE] in Marsfield for university-adjacent residences.', lat: -33.778, lng: 151.104 },
    { name: 'Meadowbank', desc: 'Expert [SERVICE] in Meadowbank for riverside apartments.', lat: -33.819, lng: 151.088 },
    { name: 'North Ryde', desc: 'Tailored [SERVICE] in North Ryde for suburban and industrial areas.', lat: -33.796, lng: 151.124 },
    { name: 'Putney', desc: 'Reliable [SERVICE] in Putney for waterfront family homes.', lat: -33.826, lng: 151.106 },
    { name: 'Ryde', desc: 'Professional [SERVICE] in Ryde for urban homes and shopping centres.', lat: -33.812, lng: 151.106 },
  ],
  'hunters-hill-council': [
    { name: 'Gladesville', desc: 'Expert [SERVICE] in Gladesville for riverside residences and commercial spaces.', lat: -33.833, lng: 151.126 },
    { name: 'Henley', desc: 'Premium [SERVICE] in Henley for heritage homes and estates.', lat: -33.844, lng: 151.138 },
    { name: 'Hunters Hill', desc: 'Tailored [SERVICE] in Hunters Hill for luxury properties and gardens.', lat: -33.834, lng: 151.140 },
    { name: 'Huntleys Cove', desc: 'Reliable [SERVICE] in Huntleys Cove for suburban units and parks.', lat: -33.836, lng: 151.119 },
    { name: 'Huntleys Point', desc: 'Professional [SERVICE] in Huntleys Point for waterfront villas.', lat: -33.840, lng: 151.144 },
    { name: 'Woolwich', desc: 'High-quality [SERVICE] in Woolwich for exclusive harbour homes.', lat: -33.839, lng: 151.171 },
  ],
  'hills-shire-council': [
    { name: 'Annangrove', desc: 'Expert [SERVICE] in Annangrove for rural estates and farms.', lat: -33.664, lng: 150.944 },
    { name: 'Baulkham Hills', desc: 'Reliable [SERVICE] in Baulkham Hills for suburban family homes.', lat: -33.759, lng: 150.993 },
    { name: 'Beaumont Hills', desc: 'Tailored [SERVICE] in Beaumont Hills for modern residential developments.', lat: -33.700, lng: 150.941 },
    { name: 'Bella Vista', desc: 'Professional [SERVICE] in Bella Vista for commercial spaces and units.', lat: -33.741, lng: 150.955 },
    { name: 'Box Hill', desc: 'High-quality [SERVICE] in Box Hill for new housing estates.', lat: -33.652, lng: 150.894 },
    { name: 'Castle Hill', desc: 'Vibrant [SERVICE] in Castle Hill for shopping centres and homes.', lat: -33.732, lng: 151.006 },
    { name: 'Dural', desc: 'Comprehensive [SERVICE] in Dural for acreage estates and orchards.', lat: -33.683, lng: 151.023 },
    { name: 'Glenhaven', desc: 'Premium [SERVICE] in Glenhaven for luxury homes and equestrian areas.', lat: -33.704, lng: 151.003 },
    { name: 'Kellyville', desc: 'Expert [SERVICE] in Kellyville for family dwellings and schools.', lat: -33.710, lng: 150.951 },
    { name: 'Kenthurst', desc: 'Reliable [SERVICE] in Kenthurst for rural residences and gardens.', lat: -33.665, lng: 151.005 },
    { name: 'North Kellyville', desc: 'Tailored [SERVICE] in North Kellyville for new suburban developments.', lat: -33.684, lng: 150.935 },
    { name: 'Rouse Hill', desc: 'Professional [SERVICE] in Rouse Hill for town centres and homes.', lat: -33.682, lng: 150.915 },
  ],
  'blacktown-council': [
    { name: 'Acacia Gardens', desc: 'Expert [SERVICE] in Acacia Gardens for suburban family homes.', lat: -33.731, lng: 150.915 },
    { name: 'Arndell Park', desc: 'Reliable [SERVICE] in Arndell Park for industrial and residential spaces.', lat: -33.789, lng: 150.898 },
    { name: 'Blacktown', desc: 'Tailored [SERVICE] in Blacktown for urban apartments and commercial buildings.', lat: -33.771, lng: 150.908 },
    { name: 'Doonside', desc: 'Professional [SERVICE] in Doonside for family dwellings and parks.', lat: -33.764, lng: 150.871 },
    { name: 'Glenwood', desc: 'High-quality [SERVICE] in Glenwood for modern homes and schools.', lat: -33.734, lng: 150.927 },
    { name: 'Kellyville Ridge', desc: 'Vibrant [SERVICE] in Kellyville Ridge for new developments and units.', lat: -33.701, lng: 150.918 },
    { name: 'Kings Langley', desc: 'Comprehensive [SERVICE] in Kings Langley for suburban residences.', lat: -33.752, lng: 150.935 },
    { name: 'Kings Park', desc: 'Premium [SERVICE] in Kings Park for parkside homes and local businesses.', lat: -33.743, lng: 150.908 },
    { name: 'Lalor Park', desc: 'Expert [SERVICE] in Lalor Park for family properties and gardens.', lat: -33.761, lng: 150.930 },
    { name: 'Marayong', desc: 'Reliable [SERVICE] in Marayong for urban homes and community spaces.', lat: -33.748, lng: 150.895 },
    { name: 'Mount Druitt', desc: 'Tailored [SERVICE] in Mount Druitt for high-density apartments and shops.', lat: -33.767, lng: 150.819 },
    { name: 'Oakhurst', desc: 'Professional [SERVICE] in Oakhurst for suburban dwellings and parks.', lat: -33.741, lng: 150.835 },
  ],
};

export async function generateStaticParams() {
  const services = ['painting', 'general-fixes', 'tiling', 'waterproofing', 'renovations' ];
  return services.flatMap(service => areas.map(area => ({ service, area: area.name })));
}

const AreaPage = ({ params = {} }) => {
  const { service, area: areaName } = params;
  const content = getServiceContent(service);
  const areaDataBase = areas.find(a => a.name === areaName);
  const subSuburbsBase = subSuburbsByArea[areaName] || [];
  const serviceLower = service.replace('-', ' ');
  const displayService = service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const capitalizeSuburb = (name) => {
    return name.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const displayArea = capitalizeSuburb(areaName);
  const subSuburbs = subSuburbsBase.map(sub => ({
    ...sub,
    desc: sub.desc.replace(/\[SERVICE\]/g, serviceLower)
  }));
  const areaData = {
    ...areaDataBase,
    desc: areaDataBase.desc.replace(/\[SERVICE\]/g, serviceLower)
  };

  // Define images for service categories. Extend for other services as needed.
  const serviceHeroImage = {
    waterproofing: 'https://funny-virtue-0648592741.media.strapiapp.com/waterproofing_hero_be271d08ab.jpg',
    painting: 'https://funny-virtue-0648592741.media.strapiapp.com/4426_07f09425d1.jpg',
    'general-fixes': 'https://funny-virtue-0648592741.media.strapiapp.com/general_fixes_cover_3a0799bdae.jpg',
    tiling: 'https://funny-virtue-0648592741.media.strapiapp.com/tiling_s_cover_e74f41ca26.jpg',
    renovations: 'https://funny-virtue-0648592741.media.strapiapp.com/renovations_cover_c57eb78b66.jpg',
  }
  const serviceImages = {
    'Interior Painting': 'https://funny-virtue-0648592741.media.strapiapp.com/interior_painting_edaae691d1.jpg',
    'Exterior Painting': 'https://funny-virtue-0648592741.media.strapiapp.com/exterior_painting_6c475253fe.jpg',
    'Commercial Painting': 'https://funny-virtue-0648592741.media.strapiapp.com/commercial_painting_4339a4d7a4.jpg',
    'Bathroom & Shower Waterproofing': 'https://funny-virtue-0648592741.media.strapiapp.com/waterproofing_bathroom_705201dc9a.jpg',
    'Balcony & Terrace Waterproofing': 'https://funny-virtue-0648592741.media.strapiapp.com/waterproofing_terrace_672dc2a655.webp',
    'Basement & Roof Waterproofing': 'https://funny-virtue-0648592741.media.strapiapp.com/waterproofing_roof_52cca97b26.jpg',
    "Kitchen Tiling": "https://funny-virtue-0648592741.media.strapiapp.com/tiling_kitchen_17868f409d.jpg",
    "Bathroom Tiling": "https://funny-virtue-0648592741.media.strapiapp.com/tiling_bathroom_aebabbdeb9.jpg",
    "Outdoor Tiling": "https://funny-virtue-0648592741.media.strapiapp.com/outdoor_tiling_c24363fcc5.jpg",
    "Plumbing Repairs":"https://funny-virtue-0648592741.media.strapiapp.com/plumbing_general_fixes_01b518142a.jpg",
    "Electrical Fixes": "https://funny-virtue-0648592741.media.strapiapp.com/electrical_fixes_16195d77f3.jpg",
    "Carpentry": "https://funny-virtue-0648592741.media.strapiapp.com/carpentry_0427faa117.jpg",
    "Bathroom Renovations": "https://funny-virtue-0648592741.media.strapiapp.com/bathroom_renovations_0726e672e1.jpg",
    "Kitchen Renovations": "https://funny-virtue-0648592741.media.strapiapp.com/kitchen_renovations_f93c619010.jpg",
    
  };

  if (!content.title || !areaData) {
    return <NotFound />;
  }

  const getServiceIcon = (serviceItem) => {
    if (serviceItem.includes('Painting')) return 'bi-brush-fill';
    if (["Fixes", "Repairs", "Carpentry"].some(fix => serviceItem.includes(fix))) return 'bi-tools';
    if (serviceItem.includes('Tiling')) return 'bi-grid-3x3-gap-fill';
    if (serviceItem.includes('Waterproofing')) return 'bi-droplet-fill';
    if (serviceItem.includes('Renovations')) return 'bi-house-door-fill';
    return 'bi-gear-fill';
  };

  const introTemplate = `At <strong>Contact Building Services</strong>, we offer high-quality ${serviceLower} services in <strong>${displayArea}</strong>, revitalizing homes, multi-story apartments, traditional buildings, and commercial spaces with fresh, durable finishes. Our experienced team applies top-quality materials and proven methods suited for urban architectures and busy city lifestyles. Whether you need interior updates, exterior protections, or full property makeovers, we're committed to delivering long-lasting results that enhance aesthetics and protection year-round.`;

  const whyChooseItems = [
    `${displayArea} Experts: Apartment, commercial, and strata ${serviceLower}.`,
    `Covering ${displayArea}: ${subSuburbs.slice(0, 4).map(s => s.name).join(', ')}, and beyond.`,
    `Certified Professionals: Over 15 years of ${serviceLower} expertise.`,
    `Premium Materials: High-quality, durable products.`,
    `Cost-Effective Pricing: Competitive rates with free consultations.`,
    `Guaranteed Work: Industry-leading warranties.`,
    `Free On-Site Estimate: Tailored quotes for your project.`,
  ];

  return (
    <>
      <Head>
        <title>{`${displayService} in ${displayArea} - Contact Building Services`}</title>
        <meta
          name="description"
          content={`Expert ${serviceLower} services in ${displayArea}, Hills District, Inner West, Randwick, Northern Beaches, and more. High-quality solutions by Contact Building Services with 15+ years of experience. Free quote: [Your Phone Number].`}
        />
        <meta
          name="keywords"
          content={`${serviceLower} services Sydney, ${serviceLower} ${displayArea}, ${serviceLower} Hills District, ${serviceLower} Surry Hills, ${serviceLower} Inner West, ${serviceLower} Northern Beaches`}
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="AU-NSW" />
        <meta name="geo.placename" content="Sydney" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'Contact Building Services',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Sydney',
              'addressRegion': 'NSW',
              'postalCode': '2000',
              'addressCountry': 'AU',
            },
            'telephone': '[Your Phone Number]',
            'email': 'info@contactbuildingservices.com.au',
            'openingHours': 'Mo-Sa 08:00-18:00',
            'description': `Professional ${serviceLower} services for homes and businesses across Sydney, backed by over 15 years of experience.`,
            'service': {
              '@type': 'Service',
              'serviceType': displayService,
              'description': `Expert ${serviceLower} for homes, apartments, and commercial properties across Sydney suburbs.`,
              'areaServed': subSuburbs.map((sub) => ({ '@type': 'Place', 'name': sub.name })),
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': `How long does ${serviceLower} last in Sydney?`,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': `Our ${serviceLower} services use premium materials suited for Sydney’s climate, ensuring long-lasting results.`,
                },
              },
              {
                '@type': 'Question',
                'name': `What’s the cost of ${serviceLower} in ${displayArea}?`,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': `Costs vary by project size and scope. Contact us for a free, tailored quote for your ${displayArea} property.`,
                },
              },
              {
                '@type': 'Question',
                'name': `Do you offer warranties on ${serviceLower} services?`,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': `Yes, we provide industry-leading warranties for all ${serviceLower} projects across Sydney.`,
                },
              },
            ],
          })}
        </script>
      </Head>

      <Hero
        page={`${displayService} in ${displayArea}`}
        description={`Expert ${serviceLower} services across all ${displayArea} suburbs. Transform your property with Contact Building Services, backed by 15+ years of experience.`}
      />

      <div className={styles.container}>
        <div className="row">
          <div className={styles.sidebar + " col-md-3"}>
            <div className={styles.sidebarInner}>
              <h3 className={styles.sidebarHeading}>
                Areas We Serve
              </h3>
              <ul className={styles.sidebarList}>
                {areas.map((area, idx) => (
                  <li key={idx} className={styles.sidebarItem}>
                    <Link href={`/area-we-serve/${service}/${area.name}`} className={styles.sidebarLink}>
                      <i className={`bi bi-geo-alt-fill ${styles.sidebarIcon}`}></i>
                      <span className={styles.sidebarText}>{capitalizeSuburb(area.name)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.mainContent + " col-md-9"}>
            <section className={styles.section}>
              <div className="service-details-thumb mb-5">
                    <Image
                      src={serviceHeroImage[service] || 'https://funny-virtue-0648592741.media.strapiapp.com/placeholder_service.jpg'}
                      alt={`House and commercial ${serviceLower} in Sydney by Contact Building Services`}
                      className="img-fluid rounded shadow-sm"
                      height={500}
                      width={1000}
                      priority
                    />
                  </div>
              <div className={styles.headerWrapper}>
                <h2 className={styles.heading}>Contact Building Services – Expert {displayService} Services in {displayArea}</h2>
                <p className={`${styles.subheading} lead`}>Your Reliable {displayService} Professionals in {displayArea} & Nearby Regions</p>
                <p className={styles.intro} dangerouslySetInnerHTML={{ __html: introTemplate }} />
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.headerWrapper}>
                <h2 className={styles.heading}>Our {displayService} Services in {displayArea}</h2>
                <p className={`${styles.subheading} lead`}>{content.intro}</p>
              </div>
              <div className={styles.grid}>
                {content.servicesList.map((item, idx) => {
                  const title = item.split(':')[0].trim();
                  const desc = item.split(':')[1]?.trim() || '';
                  const imageSrc = serviceImages[title] || 'https://funny-virtue-0648592741.media.strapiapp.com/placeholder_service.jpg'; // Fallback image
                  return (
                    <div className={styles.card} key={idx}>
                      <div className={styles.cardImageWrapper}>
                        <Image
                          src={imageSrc}
                          alt={title}
                          width={400}
                          height={250}
                          className={styles.cardImage}
                          priority={idx < 3}
                        />
                        <div className={styles.cardOverlay}>
                          <i className={`bi ${getServiceIcon(item)} ${styles.iconOverlay}`} />
                        </div>
                        <div className={styles.numberedTitle}>
                          {`${idx + 1}. ${title}`}
                        </div>
                      </div>
                      <div className={styles.cardContent}>
                        <p className={styles.cardText}>{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.headerWrapper}>
                <h2 className={styles.heading}>Why Choose Contact Building Services?</h2>
                <p className={`${styles.subheading} lead`}>{content.whyChoose}</p>
              </div>
              <div className={styles.whyChooseList}>
                <ul className={styles.list}>
                  {whyChooseItems.map((item, idx) => (
                    <li key={idx} className={styles.listItem}><i className={`bi bi-check-circle-fill ${styles.listIcon}`} />{item}</li>
                  ))}
                </ul>
              </div>
              <QuoteSection service={service} area={areaName} />
            </section>

            <section className={styles.section}>
              <div className={styles.headerWrapper}>
                <h2 className={styles.heading}>{displayService} in {displayArea} Suburbs</h2>
                <p className={`${styles.subheading} lead`}>Trusted {displayService} services across {displayArea} and nearby suburbs. </p>
              </div>
              <div className={styles.grid}>
                {subSuburbs.map((sub, idx) => (
                  <div className={styles.card} key={idx}>
                    <SuburbMap lat={sub.lat} lng={sub.lng} name={sub.name} />
                    <div className='p-2'>
                      <h5 className={styles.cardTitle}>{sub.name}</h5>
                      <p className={styles.cardText}>{sub.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <CostEstimationWidgetPrompt />
      <FooterV1 />
    </>
  );
};

export default AreaPage;