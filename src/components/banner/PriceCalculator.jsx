"use client";
import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Range } from "react-range";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tooltip } from "react-tooltip";
import costEstimationImageBlog from '@/public/assets/images/blog/blog-cost-estimation.jpg'

const useDebounce = (value, delay = 100) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
};

const PriceCalculator = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [subService, setSubService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const calculatorRef = useRef(null);

  const {
    register,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      waterproofingArea: 6,
      paintingCoats: 2,
      renovationMeasurementType: "medium",
      renovationArea: 15,
      paintingMeasurementType: "medium",
      paintingLength: 0,
      paintingWidth: 0,
      paintingHeight: 0,
      renovationSubService: "",
      paintingSubService: "",
    },
  });

  // Watch fields
  const waterproofingAreaRaw = watch("waterproofingArea", 6);
  const waterproofingAreaType = watch("waterproofingAreaType", "bathroom");
  const waterproofingMaterial = watch("waterproofingMaterial", "standard");
  const waterproofingCoating = watch("waterproofingCoating", "2");
  const waterproofingCondition = watch("waterproofingCondition", "new");
  const waterproofingLocation = watch("waterproofingLocation", "");

  const generalFixesCountRaw = watch("generalFixesCount", 0);
  const generalFixesType = watch("generalFixesType", "");
  const generalFixesUrgency = watch("generalFixesUrgency", "");

  const renovationMeasurementType = watch("renovationMeasurementType", "medium");
  const renovationAreaRaw = watch("renovationArea", 15);
  const renovationInstallations = watch("renovationInstallations", []);
  const renovationHouseAgeRaw = watch("renovationHouseAge", 0);
  const renovationQuality = watch("renovationQuality", "basic");
  const renovationSubService = watch("renovationSubService", "");

  const paintingMeasurementType = watch("paintingMeasurementType", "medium");
  const paintingLengthRaw = watch("paintingLength", 0);
  const paintingWidthRaw = watch("paintingWidth", 0);
  const paintingHeightRaw = watch("paintingHeight", 0);
  const paintingType = watch("paintingType", "");
  const paintingLocation = watch("paintingLocation", "");
  const paintingCeiling = watch("paintingCeiling", false);
  const paintingRoughSurface = watch("paintingRoughSurface", false);
  const paintingCoatsRaw = watch("paintingCoats", 2);
  const paintingQuality = watch("paintingQuality", "basic");
  const paintingSubService = watch("paintingSubService", "");

  // Debounce inputs
  const waterproofingArea = useDebounce(waterproofingAreaRaw, 100);
  const generalFixesCount = useDebounce(generalFixesCountRaw, 100);
  const renovationArea = useDebounce(renovationAreaRaw, 100);
  const renovationHouseAge = useDebounce(renovationHouseAgeRaw, 100);
  const paintingLength = useDebounce(paintingLengthRaw, 100);
  const paintingWidth = useDebounce(paintingWidthRaw, 100);
  const paintingHeight = useDebounce(paintingHeightRaw, 100);
  const paintingCoats = useDebounce(paintingCoatsRaw || 2, 100);

  // Pricing logic
  const pricing = {
    waterproofing: {
      baseRate: 50,
      areaTypeMultipliers: { bathroom: 1, kitchen: 1.1, balcony: 1.2, other: 1.15 },
      materialMultipliers: { standard: 1, premium: 1.3 },
      coatingMultipliers: { 1: 0.8, 2: 1, 3: 1.3 },
      conditionMultipliers: { new: 1, old: 1.2, damaged: 1.5 },
      locationMultipliers: { indoor: 1, outdoor: 1.1 },
    },
    generalFixes: {
      baseRate: 100,
      minimum: 300,
      typeMultipliers: { electrical: 1.5, plumbing: 1.4, carpentry: 1.2, other: 1 },
      urgencyMultipliers: { normal: 1, urgent: 1.5 },
    },
    bathroomKitchen: {
      baseRate: 800,
      installationMultipliers: { fixtures: 1.2, tiles: 1.3, cabinets: 1.5 },
      houseAgeMultipliers: { "0-10": 1, "11-30": 1.2, "31+": 1.5 },
      qualityMultipliers: { basic: 1, midRange: 1.5, luxury: 2 },
      areaSizes: { small: 10, medium: 15, large: 20 },
    },
    painting: {
      baseRate: 30,
      typeMultipliers: { standard: 1, premium: 1.3, ecoFriendly: 1.5 },
      locationMultipliers: { interior: 1, exterior: 1.2 },
      roughSurfaceMultiplier: 1.1,
      paintCoveragePerLiter: 10,
      roughSurfacePaintMultiplier: 1.2,
      qualityMultipliers: { basic: 1, midRange: 1.5, luxury: 2 },
      areaSizes: { small: 30, medium: 50, large: 100 },
    },
  };

  useEffect(() => {
    if (!selectedService) {
      setSelectedService("bathroomKitchen");
      setSubService("kitchen");
      reset({
        ...watch(),
        renovationMeasurementType: "medium",
        renovationArea: pricing.bathroomKitchen.areaSizes.medium,
        paintingMeasurementType: "medium",
        paintingLength: 0,
        paintingWidth: 0,
        paintingHeight: 0,
        paintingLocation: "",
        waterproofingAreaType: "kitchen",
        renovationSubService: "kitchen",
        paintingSubService: "",
      });
    }
  }, [selectedService, reset, watch, pricing]);

  const { costRange, paintQuantity } = useMemo(() => {
    let lowerBound = 0;
    let upperBound = 0;
    let paintQty = 0;

    if (selectedService === "waterproofing") {
      let waterproofingCost = Number(waterproofingArea) * pricing.waterproofing.baseRate;
      const areaTypeMultiplier = pricing.waterproofing.areaTypeMultipliers[waterproofingAreaType] || 1;
      const materialMultiplier = pricing.waterproofing.materialMultipliers[waterproofingMaterial] || 1;
      const coatingMultiplier = pricing.waterproofing.coatingMultipliers[waterproofingCoating] || 1;
      const conditionMultiplier = pricing.waterproofing.conditionMultipliers[waterproofingCondition] || 1;
      const locationMultiplier = pricing.waterproofing.locationMultipliers[waterproofingLocation] || 1;

      lowerBound = waterproofingCost * areaTypeMultiplier * materialMultiplier * coatingMultiplier * conditionMultiplier * locationMultiplier;
      upperBound = lowerBound * 1.2;
    }

    if (selectedService === "generalFixes") {
      let generalFixesCost = Number(generalFixesCount) * pricing.generalFixes.baseRate;
      const typeMultiplier = pricing.generalFixes.typeMultipliers[generalFixesType] || 1;
      const urgencyMultiplier = pricing.generalFixes.urgencyMultipliers[generalFixesUrgency] || 1;
      generalFixesCost *= typeMultiplier * urgencyMultiplier;
      lowerBound = Math.max(generalFixesCost, pricing.generalFixes.minimum);
      upperBound = lowerBound * 1.2;
    }

    if (selectedService === "bathroomKitchen") {
      const area = renovationMeasurementType === "custom" ? Number(renovationArea) : pricing.bathroomKitchen.areaSizes[renovationMeasurementType] || pricing.bathroomKitchen.areaSizes.medium;

      let lowerRenovationCost = area * pricing.bathroomKitchen.baseRate;
      const qualityMultiplier = pricing.bathroomKitchen.qualityMultipliers[renovationQuality] || 1;
      lowerRenovationCost *= qualityMultiplier;
      lowerBound = lowerRenovationCost;

      let upperRenovationCost = area * pricing.bathroomKitchen.baseRate;
      let installationMultiplier = 1;
      if (Array.isArray(renovationInstallations) && renovationInstallations.length > 0) {
        installationMultiplier = renovationInstallations.reduce((acc, installation) => {
          return acc * (pricing.bathroomKitchen.installationMultipliers[installation] || 1);
        }, 1);
      } else {
        installationMultiplier = 1.2 * 1.3 * 1.5;
      }
      const houseAgeMultiplier = pricing.bathroomKitchen.houseAgeMultipliers["31+"] || 1;
      upperRenovationCost *= installationMultiplier * houseAgeMultiplier * qualityMultiplier;
      upperBound = upperRenovationCost;
    }

    if (selectedService === "painting") {
      let totalPaintingArea;
      if (paintingMeasurementType === "custom") {
        const wallsArea = 2 * (paintingLength * paintingHeight) + 2 * (paintingWidth * paintingHeight);
        const ceilingArea = paintingCeiling ? paintingLength * paintingWidth : 0;
        totalPaintingArea = wallsArea + ceilingArea;
      } else {
        totalPaintingArea = pricing.painting.areaSizes[paintingMeasurementType] || pricing.painting.areaSizes.medium;
      }

      let paintArea = totalPaintingArea;
      const roughSurfacePaintMultiplier = paintingRoughSurface ? pricing.painting.roughSurfacePaintMultiplier : 1;
      paintArea *= roughSurfacePaintMultiplier;
      paintQty = (paintArea / pricing.painting.paintCoveragePerLiter) * paintingCoats;

      let lowerPaintingCost = totalPaintingArea * pricing.painting.baseRate;
      const qualityMultiplier = pricing.painting.qualityMultipliers[paintingQuality] || 1;
      lowerPaintingCost *= qualityMultiplier;
      lowerBound = lowerPaintingCost;

      let upperPaintingCost = totalPaintingArea * pricing.painting.baseRate;
      const typeMultiplier = pricing.painting.typeMultipliers[paintingType] || 1.5;
      const locationMultiplier = paintingLocation ? pricing.painting.locationMultipliers[paintingLocation] : 1.2;
      const roughSurfaceCostMultiplier = paintingRoughSurface ? pricing.painting.roughSurfaceMultiplier : 1;
      upperPaintingCost *= typeMultiplier * locationMultiplier * roughSurfaceCostMultiplier * qualityMultiplier;
      upperBound = upperPaintingCost;
    }

    return { costRange: { lowerBound, upperBound }, paintQuantity: paintQty };
  }, [
    selectedService,
    waterproofingArea,
    waterproofingAreaType,
    waterproofingMaterial,
    waterproofingCoating,
    waterproofingCondition,
    waterproofingLocation,
    generalFixesCount,
    generalFixesType,
    generalFixesUrgency,
    renovationMeasurementType,
    renovationArea,
    renovationInstallations,
    renovationHouseAge,
    renovationQuality,
    paintingMeasurementType,
    paintingLength,
    paintingWidth,
    paintingHeight,
    paintingType,
    paintingLocation,
    paintingCeiling,
    paintingRoughSurface,
    paintingCoats,
    paintingQuality,
  ]);

  const handleServiceChange = useCallback(
    (service, defaultSubService = null) => {
      setSelectedService(service);
      setSubService(defaultSubService);
      reset({
        ...watch(),
        renovationMeasurementType: "medium",
        renovationArea: pricing.bathroomKitchen.areaSizes.medium,
        paintingMeasurementType: "medium",
        paintingLength: 0,
        paintingWidth: 0,
        paintingHeight: 0,
        paintingLocation: defaultSubService === "paintInterior" ? "interior" : defaultSubService === "paintExterior" ? "exterior" : "",
        waterproofingAreaType: defaultSubService === "kitchen" ? "kitchen" : defaultSubService === "bathroom" ? "bathroom" : "",
        renovationSubService: service === "bathroomKitchen" ? defaultSubService || "" : "",
        paintingSubService: service === "painting" ? defaultSubService || "" : "",
      });
    },
    [reset, watch, pricing]
  );

  const handleSubServiceChange = (subServiceType) => {
    setSubService(subServiceType);
    reset({
      ...watch(),
      paintingLocation: subServiceType === "paintInterior" ? "interior" : subServiceType === "paintExterior" ? "exterior" : watch("paintingLocation"),
      waterproofingAreaType: subServiceType === "kitchen" ? "kitchen" : subServiceType === "bathroom" ? "bathroom" : watch("waterproofingAreaType"),
      renovationSubService: selectedService === "bathroomKitchen" ? subServiceType : "",
      paintingSubService: selectedService === "painting" ? subServiceType : "",
    });
  };

  const handleRequestEstimate = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleInfoClick = useCallback(() => {
    setShowInfoModal(true);
  }, []);

  const handleScrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const measurementGuidance = `
    To measure the area in square meters:
    1. **For Renovation (Kitchen/Bathroom)**:
       - Measure the length and width of the area in meters. Multiply these two values (Area = Length × Width).
       - Small: ~10 m², Medium: ~15 m², Large: ~20 m².
    2. **For Painting**:
       - Measure the length, width, and height of the room in meters. The calculator will compute the total area of the walls (2 * (length * height) + 2 * (width * height)) and the ceiling (length * width) if selected.
       - Small: ~30 m², Medium: ~50 m², Large: ~100 m².
    3. **For Waterproofing**:
       - Measure the area to be waterproofed (e.g., bathroom floor, balcony). A typical bathroom is 6–10 m².
    4. **For General Fixes**:
       - Count the number of tasks (e.g., fixing a light, repairing a pipe).
    5. **Using iPhone Measure App**:
       - Open the Measure app on your iPhone, follow the on-screen instructions to measure the dimensions, then calculate the area as needed.
    If measuring in feet, convert to meters (1 foot = 0.3048 meters).
  `;

  // Service-specific content for intro and results
  const serviceContent = {
    waterproofing: {
      introTitle: "Instant Waterproofing Cost Calculator – Sydney’s Trusted Estimate Tool",
      introText: "Get an instant, accurate estimate for your waterproofing project in Sydney using our free online cost calculator. Whether you need bathroom waterproofing, balcony membrane solutions, or laundry area protection, our tool provides tailored pricing based on real Sydney rates per square metre. Simply select your area, enter the size, choose material type, and number of coats to receive a detailed cost estimate — all in under 60 seconds. Perfect for homeowners, builders, and renovators looking for transparent waterproofing prices with no hidden fees. Request a free site inspection once you’re done and get started with Sydney’s trusted waterproofing specialists.",
      estimateTitle: "Waterproofing Estimate",
      promoText: "Protect your property by waterproofing today!",
      bulletPoints: [
        "Protect your property with professional waterproofing services.",
        "We use certified materials and licensed applicators.",
      ],
      buttonText: "Try Our Waterproofing Calculator Now",
    },
    painting: {
      introTitle: "Instant Painting Cost Calculator – Sydney’s Trusted Estimate Tool",
      introText: "Get an instant, accurate estimate for your painting project in Sydney with our free online cost calculator. Whether you’re refreshing interior walls, transforming exteriors, or painting ceilings, our tool delivers tailored pricing based on real Sydney rates per square metre. Select your area, input dimensions, choose paint type, and specify coats for a detailed cost estimate in under 60 seconds. Ideal for homeowners and renovators seeking transparent painting prices with no hidden fees. Request a free site inspection to finalize your quote with Sydney’s trusted painting specialists.",
      estimateTitle: subService === "paintInterior" ? "Interior Painting Estimate" : "Exterior Painting Estimate",
      promoText: "Transform your space with professional painting!",
      bulletPoints: [
        "Revitalize your home with expert painting services.",
        "We use high-quality, durable paints for lasting results.",
      ],
      buttonText: "Try Our Painting Calculator Now",
    },
    bathroomKitchen: {
      introTitle: "Quick Renovation Cost Calculator for Sydney Homes",
      introText: "Get a fast, free estimate for your kitchen or bathroom reno in Sydney with our online tool. Just pop in details like room size, quality level, and any installations to see your costs in under a minute. Perfect for homeowners, tenants, or anyone looking to fix up their place before moving out or just getting things done. No hidden fees, just clear pricing. Book a free site visit to lock in your quote with our Sydney reno crew!",
      estimateTitle: subService === "kitchen" ? "Kitchen Renovation Estimate" : "Bathroom Renovation Estimate",
      promoText: "Elevate your home with a stunning renovation!",
      bulletPoints: [
        "Create your dream kitchen or bathroom with expert craftsmanship.",
        "We use premium materials tailored to your style.",
      ],
      buttonText: "Kick Off Your Reno Estimate Now",
    },
    generalFixes: {
      introTitle: "Instant General Fixes Cost Calculator – Sydney’s Trusted Estimate Tool",
      introText: "Get an instant, accurate estimate for your general fixes in Sydney with our free online cost calculator. Whether you need electrical repairs, plumbing fixes, carpentry, or other home maintenance, our tool provides tailored pricing based on real Sydney rates. Select the type of fix, specify the number of tasks, and choose urgency for a detailed cost estimate in under 60 seconds. Ideal for homeowners seeking transparent pricing with no hidden fees. Request a free site inspection with Sydney’s trusted home maintenance specialists.",
      estimateTitle: "General Fixes Estimate",
      promoText: "Keep your home in top shape with expert fixes!",
      bulletPoints: [
        "Fast, reliable repairs by skilled professionals.",
        "We handle electrical, plumbing, carpentry, and more.",
      ],
      buttonText: "Try Our General Fixes Calculator Now",
    },
  };

  return (
    <div className="price-calculator-page">
      <div className="container py-5">
        {/* Blog Post Section */}
        <section className="blog-section mb-5">
          <div className="row align-items-center">
            <div className="col-md-6 blog-text">
              <h2 className="blog-title">Get Instant Cost Estimates for Your Sydney Home Projects</h2>
              <div className="blog-content">
                <p>
                  Want to refresh your Sydney home? Whether you’re a homeowner eyeing a stunning kitchen revamp, a tenant needing quick fixes before moving out, or just tackling that leaky balcony, we’ve got you covered. Our <strong>four expert services</strong>—painting, kitchen/bathroom renovation, general fixes, and waterproofing—can transform your space. Best part? Our <strong>free online cost calculator</strong> gives you a tailored estimate for any of these in under a minute!
                </p>
                <p>
                  In Sydney, costs depend on factors like room size, materials, or job complexity. Need a fresh coat of paint for your living room? Our tool lets you pick interior or exterior, standard or premium paint, and get real-time pricing. Planning a kitchen or bathroom reno? Choose your finishes—basic, mid-range, or luxury—and see costs instantly. Got a flickering light or clogged drain? Select general fixes, specify the tasks, and know what to budget. For waterproofing, just enter the area (bathroom, balcony, or more) and material type for a clear estimate. No hidden fees, just honest Sydney rates.
                </p>
                <p>
                  Why use our calculator? It’s <strong>fast, free, and built for Sydney homes</strong>. Adjust options to fit your budget, whether you’re staying long-term or prepping to hand over the keys. Once you’ve got your estimate, book a <strong>free site visit</strong> with our Sydney crew to lock in your quote. No stress, just results.
                </p>
              </div>
            </div>
            <div className="col-md-6 blog-image text-center">
              <Image
                src={costEstimationImageBlog}
                alt="Sydney home services: painting, renovation, fixes, waterproofing"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "450px", height: "auto" }}
              />
              <p className="image-caption mt-2">
                Painting, reno, fixes, or waterproofing—estimate it all now!
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <div ref={calculatorRef}>
          <div className="row">
            <div className="col-lg-7">
              <form className="calculator-form">
                {/* Service Selection */}
                <div className="mb-5">
                  <h3 className="section-title">
                    <i className="bi bi-house-gear-fill me-2"></i> Choose Your Project
                  </h3>
                  <div className="row">
                    {[
                      { id: "bathroomKitchen", label: "Renovation", icon: "bi-house-fill", sub: "kitchen" },
                      { id: "painting", label: "Painting", icon: "bi-paint-bucket", sub: "paintInterior" },
                      { id: "waterproofing", label: "Waterproofing", icon: "bi-shield-fill", sub: null },
                      { id: "generalFixes", label: "General Fixes", icon: "bi-hammer", sub: null },
                    ].map((service) => (
                      <div className="col-md-6 col-sm-6 mb-3" key={service.id}>
                        <div
                          className={`service-card ${selectedService === service.id ? "selected" : ""}`}
                          onClick={() => handleServiceChange(service.id, service.sub)}
                        >
                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              id={service.id}
                              name="service"
                              checked={selectedService === service.id}
                              onChange={() => handleServiceChange(service.id, service.sub)}
                            />
                            <label className="form-check-label" htmlFor={service.id}>
                              <i className={`bi ${service.icon} me-2`}></i> {service.label}
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-Service Selection */}
                {selectedService === "bathroomKitchen" && (
                  <div className="mb-4 sub-service-selection">
                    <h4 className="sub-section-title">
                      <i className="bi bi-door-open-fill me-2"></i> Select Area
                    </h4>
                    <div className="d-flex flex-wrap gap-3">
                      {["kitchen", "bathroom"].map((area) => (
                        <div className="form-check" key={area}>
                          <input
                            type="radio"
                            className="form-check-input"
                            id={`renovation${area}`}
                            value={area}
                            {...register("renovationSubService", { required: "Please select an area to renovate" })}
                            onChange={() => handleSubServiceChange(area)}
                          />
                          <label className="form-check-label" htmlFor={`renovation${area}`}>
                            {area.charAt(0).toUpperCase() + area.slice(1)}
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors.renovationSubService && (
                      <div className="invalid-feedback d-block">{errors.renovationSubService.message}</div>
                    )}
                  </div>
                )}

                {selectedService === "painting" && (
                  <div className="mb-4 sub-service-selection">
                    <h4 className="sub-section-title">
                      <i className="bi bi-paint-roller me-2"></i> Select Area
                    </h4>
                    <div className="d-flex flex-wrap gap-3">
                      {[
                        { id: "paintInterior", label: "Interior" },
                        { id: "paintExterior", label: "Exterior" },
                      ].map((area) => (
                        <div className="form-check" key={area.id}>
                          <input
                            type="radio"
                            className="form-check-input"
                            id={`painting${area.id}`}
                            value={area.id}
                            {...register("paintingSubService", { required: "Please select an area to paint" })}
                            onChange={() => handleSubServiceChange(area.id)}
                          />
                          <label className="form-check-label" htmlFor={`painting${area.id}`}>
                            {area.label}
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors.paintingSubService && (
                      <div className="invalid-feedback d-block">{errors.paintingSubService.message}</div>
                    )}
                  </div>
                )}

                {/* Service Details */}
                {(selectedService === "waterproofing" ||
                  selectedService === "generalFixes" ||
                  (selectedService === "bathroomKitchen" && subService) ||
                  (selectedService === "painting" && subService)) && (
                  <div className="service-details">
                    <h3 className="section-title">
                      <i className="bi bi-list-check me-2"></i> Project Details
                    </h3>

                    {selectedService === "waterproofing" && (
                      <>
                        <div className="form-group mb-4">
                          <label htmlFor="waterproofingAreaType" className="form-label">
                            <i className="bi bi-house-door me-2"></i> Type of Area
                          </label>
                          <select
                            className={`form-control ${errors.waterproofingAreaType ? "is-invalid" : ""}`}
                            id="waterproofingAreaType"
                            {...register("waterproofingAreaType", { required: "Area type is required" })}
                          >
                            <option value="bathroom">Bathroom</option>
                            <option value="kitchen">Kitchen</option>
                            <option value="balcony">Balcony</option>
                            <option value="other">Other</option>
                          </select>
                          {errors.waterproofingAreaType && (
                            <div className="invalid-feedback">{errors.waterproofingAreaType.message}</div>
                          )}
                          <small className="form-text">Select the main area you would like to waterproof.</small>
                        </div>

                        <div className="form-group mb-4">
                          <label htmlFor="waterproofingMaterial" className="form-label">
                            <i className="bi bi-bricks me-2"></i> Material
                          </label>
                          <select
                            className={`form-control ${errors.waterproofingMaterial ? "is-invalid" : ""}`}
                            id="waterproofingMaterial"
                            {...register("waterproofingMaterial", { required: "Material selection is required" })}
                          >
                            <option value="standard">Standard</option>
                            <option value="premium">Premium</option>
                          </select>
                          {errors.waterproofingMaterial && (
                            <div className="invalid-feedback">{errors.waterproofingMaterial.message}</div>
                          )}
                          <small className="form-text">Premium membranes offer extra durability, flexibility, and UV protection.</small>
                        </div>

                        <div className="form-group mb-4">
                          <label htmlFor="waterproofingCoating" className="form-label">
                            <i className="bi bi-layers me-2"></i> Coating
                          </label>
                          <select
                            className={`form-control ${errors.waterproofingCoating ? "is-invalid" : ""}`}
                            id="waterproofingCoating"
                            {...register("waterproofingCoating", { required: "Coating selection is required" })}
                          >
                            <option value="1">1 Coat</option>
                            <option value="2">2 Coats</option>
                            <option value="3">3 Coats</option>
                          </select>
                          {errors.waterproofingCoating && (
                            <div className="invalid-feedback">{errors.waterproofingCoating.message}</div>
                          )}
                          <small className="form-text">We recommend at least 2 coats for all internal wet areas.</small>
                        </div>

                        <div className="form-group mb-4">
                          <label className="form-label">
                            <i className="bi bi-rulers me-2"></i> Area Size (m²)
                            <i
                              className="bi bi-info-circle-fill ms-2 info-icon"
                              onClick={handleInfoClick}
                              data-tooltip-id="area-tooltip"
                              data-tooltip-content="Use a tape measure or iPhone Measure app"
                            ></i>
                          </label>
                          <Range
                            step={0.05}
                            min={1}
                            max={50}
                            values={[Number(waterproofingArea)]}
                            onChange={(values) => reset({ ...watch(), waterproofingArea: values[0] })}
                            renderTrack={({ props, children }) => (
                              <div
                                {...props}
                                className="slider-track"
                                style={{
                                  ...props.style,
                                  height: "8px",
                                  background: `linear-gradient(to right, #ff6600 0%, #ff6600 ${((waterproofingArea - 1) / 49) * 100}%, #e0e0e0 ${((waterproofingArea - 1) / 49) * 100}%, #e0e0e0 100%)`,
                                  borderRadius: "4px",
                                  margin: "0 10px",
                                }}
                              >
                                {children}
                              </div>
                            )}
                            renderThumb={({ props }) => (
                              <div
                                {...props}
                                className="slider-thumb"
                                style={{
                                  ...props.style,
                                  height: "24px",
                                  width: "24px",
                                  backgroundColor: "#fff",
                                  border: "3px solid #ff6600",
                                  borderRadius: "50%",
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                                  cursor: "grab",
                                  transition: "all 0.2s ease",
                                  marginTop: "-5px",
                                }}
                              >
                                <div className="slider-value">
                                  {waterproofingArea.toFixed(1)} m²
                                </div>
                              </div>
                            )}
                          />
                          <small className="form-text">A typical bathroom is around 6–10 m².</small>
                        </div>

                        <div className="form-group mb-4">
                          <label htmlFor="waterproofingCondition" className="form-label">
                            <i className="bi bi-tools me-2"></i> Surface Condition
                          </label>
                          <select
                            className={`form-control ${errors.waterproofingCondition ? "is-invalid" : ""}`}
                            id="waterproofingCondition"
                            {...register("waterproofingCondition", { required: "Surface condition is required" })}
                          >
                            <option value="new">New Surface</option>
                            <option value="old">Old Surface</option>
                            <option value="damaged">Damaged Surface</option>
                          </select>
                          {errors.waterproofingCondition && (
                            <div className="invalid-feedback">{errors.waterproofingCondition.message}</div>
                          )}
                          <small className="form-text">Old or damaged surfaces may require additional preparation work.</small>
                        </div>

                        <div className="form-group mb-4">
                          <label htmlFor="waterproofingLocation" className="form-label">
                            <i className="bi bi-geo-alt me-2"></i> Location
                          </label>
                          <select
                            className={`form-control ${errors.waterproofingLocation ? "is-invalid" : ""}`}
                            id="waterproofingLocation"
                            {...register("waterproofingLocation", { required: "Location is required" })}
                          >
                            <option value="">Select location</option>
                            <option value="indoor">Indoor</option>
                            <option value="outdoor">Outdoor</option>
                          </select>
                          {errors.waterproofingLocation && (
                            <div className="invalid-feedback">{errors.waterproofingLocation.message}</div>
                          )}
                          <small className="form-text">Outdoor waterproofing may incur additional costs.</small>
                        </div>
                      </>
                    )}

                    {selectedService === "generalFixes" && (
                      <>
                        <div className="form-group mb-4">
                          <label htmlFor="generalFixesCount" className="form-label">
                            <i className="bi bi-list-task me-2"></i> Number of Fixes Needed
                          </label>
                          <input
                            type="number"
                            className={`form-control ${errors.generalFixesCount ? "is-invalid" : ""}`}
                            id="generalFixesCount"
                            placeholder="Enter number of fixes"
                            {...register("generalFixesCount", {
                              required: "Number of fixes is required",
                              min: { value: 1, message: "At least 1 fix is required" },
                            })}
                          />
                          {errors.generalFixesCount && (
                            <div className="invalid-feedback">{errors.generalFixesCount.message}</div>
                          )}
                          <small className="form-text">Rate: ${pricing.generalFixes.baseRate} per fix (Minimum ${pricing.generalFixes.minimum})</small>
                        </div>

                        <div className="form-group mb-4">
                          <label htmlFor="generalFixesType" className="form-label">
                            <i className="bi bi-wrench me-2"></i> Type of Fixes
                          </label>
                          <select
                            className={`form-control ${errors.generalFixesType ? "is-invalid" : ""}`}
                            id="generalFixesType"
                            {...register("generalFixesType", { required: "Fix type is required" })}
                          >
                            <option value="">Select fix type</option>
                            <option value="electrical">Electrical</option>
                            <option value="plumbing">Plumbing</option>
                            <option value="carpentry">Carpentry</option>
                            <option value="other">Other</option>
                          </select>
                          {errors.generalFixesType && (
                            <div className="invalid-feedback">{errors.generalFixesType.message}</div>
                          )}
                          <small className="form-text">Electrical and plumbing fixes may increase the cost.</small>
                        </div>

                        <div className="form-group mb-4">
                          <label htmlFor="generalFixesUrgency" className="form-label">
                            <i className="bi bi-clock me-2"></i> Urgency
                          </label>
                          <select
                            className={`form-control ${errors.generalFixesUrgency ? "is-invalid" : ""}`}
                            id="generalFixesUrgency"
                            {...register("generalFixesUrgency", { required: "Urgency selection is required" })}
                          >
                            <option value="">Select urgency</option>
                            <option value="normal">Normal</option>
                            <option value="urgent">Urgent</option>
                          </select>
                          {errors.generalFixesUrgency && (
                            <div className="invalid-feedback">{errors.generalFixesUrgency.message}</div>
                          )}
                          <small className="form-text">Urgent fixes may incur a 50% surcharge.</small>
                        </div>
                      </>
                    )}

                    {selectedService === "bathroomKitchen" && subService && (
                      <>
                        <div className="form-group mb-4">
                          <label className="form-label">
                            <i className="bi bi-rulers me-2"></i> Measurements (m²)
                            <i
                              className="bi bi-info-circle-fill ms-2 info-icon"
                              onClick={handleInfoClick}
                              data-tooltip-id="area-tooltip"
                              data-tooltip-content="Use a tape measure or iPhone Measure app"
                            ></i>
                          </label>
                          <div className="d-flex flex-wrap gap-3 mb-3">
                            {["small", "medium", "large", "custom"].map((size) => (
                              <div className="form-check" key={size}>
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  id={`renovationMeasurement${size}`}
                                  value={size}
                                  {...register("renovationMeasurementType", { required: "Measurement type is required" })}
                                />
                                <label className="form-check-label" htmlFor={`renovationMeasurement${size}`}>
                                  {size.charAt(0).toUpperCase() + size.slice(1)} {size !== "custom" ? `(${pricing.bathroomKitchen.areaSizes[size]} m²)` : ""}
                                </label>
                              </div>
                            ))}
                          </div>
                          {renovationMeasurementType === "custom" && (
                            <input
                              type="number"
                              className={`form-control ${errors.renovationArea ? "is-invalid" : ""}`}
                              id="renovationArea"
                              placeholder="Enter area in square meters"
                              {...register("renovationArea", {
                                required: "Area is required",
                                min: { value: 1, message: "Area must be at least 1 square meter" },
                              })}
                            />
                          )}
                          {errors.renovationArea && (
                            <div className="invalid-feedback">{errors.renovationArea.message}</div>
                          )}
                          <small className="form-text">Rate: ${pricing.bathroomKitchen.baseRate} per square meter</small>
                        </div>

                        <div className="form-group mb-4">
                          <label className="form-label">
                            <i className="bi bi-box-seam me-2"></i> Installations
                          </label>
                          <div className="d-flex flex-wrap gap-3">
                            {["fixtures", "tiles", "cabinets"].map((item) => (
                              <div className="form-check" key={item}>
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id={`renovation${item}`}
                                  value={item}
                                  {...register("renovationInstallations")}
                                />
                                <label className="form-check-label" htmlFor={`renovation${item}`}>
                                  {item.charAt(0).toUpperCase() + item.slice(1)}
                                </label>
                              </div>
                            ))}
                          </div>
                          <small className="form-text">Each installation type may increase the cost.</small>
                        </div>

                        <div className="form-group mb-4">
                          <label htmlFor="renovationHouseAge" className="form-label">
                            <i className="bi bi-building me-2"></i> House Age (years)
                          </label>
                          <input
                            type="number"
                            className={`form-control ${errors.renovationHouseAge ? "is-invalid" : ""}`}
                            id="renovationHouseAge"
                            placeholder="Enter house age in years"
                            {...register("renovationHouseAge", {
                              required: "House age is required",
                              min: { value: 0, message: "House age cannot be negative" },
                            })}
                          />
                          {errors.renovationHouseAge && (
                            <div className="invalid-feedback">{errors.renovationHouseAge.message}</div>
                          )}
                          <small className="form-text">Older houses may require additional work.</small>
                        </div>

                        <div className="form-group mb-4">
                          <label htmlFor="renovationQuality" className="form-label">
                            <i className="bi bi-star me-2"></i> Quality
                          </label>
                          <select
                            className={`form-control ${errors.renovationQuality ? "is-invalid" : ""}`}
                            id="renovationQuality"
                            {...register("renovationQuality", { required: "Quality selection is required" })}
                          >
                            <option value="basic">Basic</option>
                            <option value="midRange">Mid-range</option>
                            <option value="luxury">Luxury</option>
                          </select>
                          {errors.renovationQuality && (
                            <div className="invalid-feedback">{errors.renovationQuality.message}</div>
                          )}
                          <small className="form-text">Higher quality options increase the cost due to better materials and finishes.</small>
                        </div>
                      </>
                    )}

                    {selectedService === "painting" && subService && (
                      <>
                        <div className="form-group mb-4">
                          <label className="form-label">
                            <i className="bi bi-rulers me-2"></i> Measurements (m²)
                            <i
                              className="bi bi-info-circle-fill ms-2 info-icon"
                              onClick={handleInfoClick}
                              data-tooltip-id="area-tooltip"
                              data-tooltip-content="Use a tape measure or iPhone Measure app"
                            ></i>
                          </label>
                          <div className="d-flex flex-wrap gap-3 mb-3">
                            {["small", "medium", "large", "custom"].map((size) => (
                              <div className="form-check" key={size}>
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  id={`paintingMeasurement${size}`}
                                  value={size}
                                  {...register("paintingMeasurementType", { required: "Measurement type is required" })}
                                />
                                <label className="form-check-label" htmlFor={`paintingMeasurement${size}`}>
                                  {size.charAt(0).toUpperCase() + size.slice(1)} {size !== "custom" ? `(${pricing.painting.areaSizes[size]} m²)` : ""}
                                </label>
                              </div>
                            ))}
                          </div>
                          {paintingMeasurementType === "custom" && (
                            <div className="row">
                              <div className="col-md-4 mb-3">
                                <label htmlFor="paintingLength" className="form-label">
                                  <i className="bi bi-arrows-fullscreen me-2"></i> Length (m)
                                </label>
                                <input
                                  type="number"
                                  className={`form-control ${errors.paintingLength ? "is-invalid" : ""}`}
                                  id="paintingLength"
                                  placeholder="Enter length in meters"
                                  step="0.1"
                                  {...register("paintingLength", {
                                    required: "Length is required",
                                    min: { value: 1, message: "Length must be at least 1 meter" },
                                  })}
                                />
                                {errors.paintingLength && (
                                  <div className="invalid-feedback">{errors.paintingLength.message}</div>
                                )}
                              </div>
                              <div className="col-md-4 mb-3">
                                <label htmlFor="paintingWidth" className="form-label">
                                  <i className="bi bi-arrows-fullscreen me-2"></i> Width (m)
                                </label>
                                <input
                                  type="number"
                                  className={`form-control ${errors.paintingWidth ? "is-invalid" : ""}`}
                                  id="paintingWidth"
                                  placeholder="Enter width in meters"
                                  step="0.1"
                                  {...register("paintingWidth", {
                                    required: "Width is required",
                                    min: { value: 1, message: "Width must be at least 1 meter" },
                                  })}
                                />
                                {errors.paintingWidth && (
                                  <div className="invalid-feedback">{errors.paintingWidth.message}</div>
                                )}
                              </div>
                              <div className="col-md-4 mb-3">
                                <label htmlFor="paintingHeight" className="form-label">
                                  <i className="bi bi-arrows-fullscreen me-2"></i> Height (m)
                                </label>
                                <input
                                  type="number"
                                  className={`form-control ${errors.paintingHeight ? "is-invalid" : ""}`}
                                  id="paintingHeight"
                                  placeholder="Enter height in meters"
                                  step="0.1"
                                  {...register("paintingHeight", {
                                    required: "Height is required",
                                    min: { value: 1, message: "Height must be at least 1 meter" },
                                  })}
                                />
                                {errors.paintingHeight && (
                                  <div className="invalid-feedback">{errors.paintingHeight.message}</div>
                                )}
                              </div>
                            </div>
                          )}
                          <small className="form-text">Rate: ${pricing.painting.baseRate} per square meter</small>
                        </div>

                        <div className="form-group mb-4">
                          <h5 className="sub-section-title">
                            <i className="bi bi-gear me-2"></i> Advanced Paint Options
                          </h5>
                          <div className="d-flex flex-wrap gap-3 mb-3">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="paintingCeiling"
                                {...register("paintingCeiling")}
                              />
                              <label className="form-check-label" htmlFor="paintingCeiling">
                                Needs ceiling paint?
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="paintingRoughSurface"
                                {...register("paintingRoughSurface")}
                              />
                              <label className="form-check-label" htmlFor="paintingRoughSurface">
                                Surface rough or porous?
                              </label>
                            </div>
                          </div>
                          <small className="form-text d-block mb-3">Rough surfaces need more primer and paint.</small>

                          <label htmlFor="paintingCoats" className="form-label">
                            <i className="bi bi-layers me-2"></i> Number of Paint Coats
                          </label>
                          <input
                            type="number"
                            className={`form-control ${errors.paintingCoats ? "is-invalid" : ""}`}
                            id="paintingCoats"
                            placeholder="Enter number of coats (default is 2)"
                            min="1"
                            {...register("paintingCoats", {
                              min: { value: 1, message: "At least 1 coat is required" },
                            })}
                          />
                          {errors.paintingCoats && (
                            <div className="invalid-feedback">{errors.paintingCoats.message}</div>
                          )}
                          <small className="form-text">Assumes 2 coats if left blank.</small>
                        </div>

                        <div className="form-group mb-4">
                          <label htmlFor="paintingType" className="form-label">
                            <i className="bi bi-droplet me-2"></i> Type of Paint
                          </label>
                          <select
                            className={`form-control ${errors.paintingType ? "is-invalid" : ""}`}
                            id="paintingType"
                            {...register("paintingType", { required: "Paint type is required" })}
                          >
                            <option value="">Select paint type</option>
                            <option value="standard">Standard</option>
                            <option value="premium">Premium</option>
                            <option value="ecoFriendly">Eco-Friendly</option>
                          </select>
                          {errors.paintingType && (
                            <div className="invalid-feedback">{errors.paintingType.message}</div>
                          )}
                          <small className="form-text">Premium and eco-friendly paints may increase the cost.</small>
                        </div>

                        <div className="form-group mb-4">
                          <label htmlFor="paintingLocation" className="form-label">
                            <i className="bi bi-geo-alt me-2"></i> Location
                          </label>
                          <select
                            className={`form-control ${errors.paintingLocation ? "is-invalid" : ""}`}
                            id="paintingLocation"
                            {...register("paintingLocation", { required: "Location is required" })}
                            disabled
                          >
                            <option value="">Select location</option>
                            <option value="interior">Interior</option>
                            <option value="exterior">Exterior</option>
                          </select>
                          {errors.paintingLocation && (
                            <div className="invalid-feedback">{errors.paintingLocation.message}</div>
                          )}
                          <small className="form-text">Exterior painting may incur additional costs.</small>
                        </div>

                        <div className="form-group mb-4">
                          <label htmlFor="paintingQuality" className="form-label">
                            <i className="bi bi-star me-2"></i> Quality
                          </label>
                          <select
                            className={`form-control ${errors.paintingQuality ? "is-invalid" : ""}`}
                            id="paintingQuality"
                            {...register("paintingQuality", { required: "Quality selection is required" })}
                          >
                            <option value="basic">Basic</option>
                            <option value="midRange">Mid-range</option>
                            <option value="luxury">Luxury</option>
                          </select>
                          {errors.paintingQuality && (
                            <div className="invalid-feedback">{errors.paintingQuality.message}</div>
                          )}
                          <small className="form-text">Higher quality options increase the cost due to better materials.</small>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </form>
            </div>

            {/* Estimation Results Section */}
            <div className="col-lg-5">
              {(selectedService === "waterproofing" ||
                selectedService === "generalFixes" ||
                (selectedService === "bathroomKitchen" && subService) ||
                (selectedService === "painting" && subService)) && (
                <div className="estimation-section sticky-top">
                  <h3 className="estimation-title">
                    Our Rough {serviceContent[selectedService].estimateTitle}
                  </h3>
                  <p className="estimation-cost">
                    ${costRange.lowerBound.toLocaleString()} - ${costRange.upperBound.toLocaleString()}*
                  </p>
                  <p className="estimation-disclaimer fst-italic">
                    *This is a preliminary estimate based on your answers. Final pricing will be confirmed after a free site inspection.
                  </p>
                  <p className="estimation-promo">
                    {serviceContent[selectedService].promoText}
                  </p>
                  <ul className="estimation-benefits">
                    {serviceContent[selectedService].bulletPoints.map((point, index) => (
                      <li key={index}>
                        <i className="bi bi-check-circle-fill me-2"></i>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="estimation-cta fw-medium">
                    Contact us for a free inspection and final quote.
                  </p>
                  <button
                    type="button"
                    className="btn estimation-btn w-100"
                    onClick={handleRequestEstimate}
                  >
                    Get Your Final Quote <i className="bi bi-arrow-right ms-2"></i>
                  </button>

                </div>
              )}
            </div>
          </div>

          {selectedService === "generalFixes" && (
            <div className="text-center mt-5">
              <button
                type="button"
                className="btn submit-btn"
                onClick={handleRequestEstimate}
              >
                <i className="bi bi-arrow-up-right-circle-fill me-2"></i>
                Request a Detailed Estimate
              </button>
            </div>
          )}
        </div>

        {/* Info Modal */}
        {showInfoModal && (
          <div className="info-modal-backdrop">
            <div className="info-modal">
              <h5 className="info-modal-title">
                <i className="bi bi-info-circle-fill me-2"></i> How to Measure Area
              </h5>
              <p className="info-modal-content">{measurementGuidance}</p>
              <button
                className="btn info-modal-close-btn"
                onClick={() => setShowInfoModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <Tooltip id="area-tooltip" />

        {/* Custom Styles */}
        <style jsx>{`
          .price-calculator-page {
            background: #f4f7fa;
            min-height: 100vh;
          }

          .blog-section {
            background: #fff;
            padding: 3rem;
          }

          .blog-title {
            font-size: 2.25rem;
            font-weight: 700;
            color: #222;
            margin-bottom: 1.5rem;
            line-height: 1.3;
          }

          .blog-content {
            font-size: 1.1rem;
            color: #333;
            line-height: 1.7;
            margin-bottom: 1.5rem;
          }

          .blog-content p {
            margin-bottom: 1rem;
          }

          .blog-content strong {
            color: #ff6600;
            font-weight: 600;
          }

          .blog-image img {
            max-width: 100%;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
          }

          .blog-image img:hover {
            transform: scale(1.02);
          }

          .image-caption {
            font-size: 0.95rem;
            color: #555;
            font-style: italic;
            margin-top: 0.75rem;
          }

          .jump-to-calculator-btn {
            background: linear-gradient(90deg, #ff6600, #e65c00);
            border: none;
            padding: 0.75rem 2rem;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 600;
            color: #fff;
            transition: all 0.3s ease;
            box-shadow: 0 2px 10px rgba(255, 102, 0, 0.3);
          }

          .jump-to-calculator-btn:hover {
            background: linear-gradient(90deg, #e65c00, #cc5200);
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(255, 102, 0, 0.5);
          }

          .page-title {
            font-size: 3rem;
            font-weight: 700;
            letter-spacing: 1px;
            animation: fadeIn 0.5s ease-in-out;
          }

          .section-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 1.5rem;
            border-bottom: 2px solid #ff6600;
            padding-bottom: 0.5rem;
          }

          .sub-section-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: #ff6600;
            margin-bottom: 1rem;
          }

          .calculator-form {
            background: #fff;
            padding: 2rem;
          }

          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          @keyframes slideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .service-card {
            background: #fff;
            padding: 1.5rem;
            border-radius: 10px;
            border: 1px solid #e0e0e0;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .service-card:hover {
            border-color: #ff6600;
            box-shadow: 0 5px 15px rgba(255, 102, 0, 0.2);
            transform: translateY(-5px);
          }

          .service-card.selected {
            border-color: #ff6600;
            background: #fff9f2;
            box-shadow: 0 5px 15px rgba(255, 102, 0, 0.3);
          }

          .form-check-input {
            border: 2px solid #ff6600;
            transition: all 0.3s ease;
          }

          .form-check-input:checked {
            background-color: #ff6600;
            border-color: #ff6600;
          }

          .form-check-label {
            color: #333;
            font-weight: 600;
            font-size: 1rem;
            display: flex;
            align-items: center;
            transition: color 0.3s ease;
          }

          .form-check-label i {
            font-size: 1.5rem;
            margin-right: 0.5rem;
          }

          .form-check:hover .form-check-label {
            color: #ff6600;
          }

          .sub-service-selection {
            background: #fff9f2;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1.5rem;
          }

          .service-details {
            background: #fff;
            padding: 1.5rem;
            border-radius: 8px;
            border: 1px solid #e0e0e0;
          }

          .form-group {
            position: relative;
            margin-bottom: 1.5rem;
          }

          .form-label {
            font-weight: 600;
            color: #333;
            font-size: 0.95rem;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            transition: all 0.3s ease;
          }

          .info-icon {
            color: #ff6600;
            font-size: 1.2rem;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-left: 0.5rem;
          }

          .info-icon:hover {
            color: #e65c00;
            transform: scale(1.2);
          }

          .form-control {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 0.75rem;
            font-size: 1rem;
            background: #fff;
            transition: all 0.3s ease;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
          }

          .form-control:focus {
            border-color: #ff6600;
            box-shadow: 0 0 10px rgba(255, 102, 0, 0.3);
            background: #fff9f2;
            outline: none;
          }

          .form-control::placeholder {
            color: #bbb;
            font-style: italic;
          }

          .form-control.is-invalid {
            border-color: #dc3545;
            box-shadow: 0 0 10px rgba(220, 53, 69, 0.3);
          }

          .invalid-feedback {
            font-size: 0.85rem;
            color: #dc3545;
            margin-top: 0.25rem;
          }

          .form-text {
            color: #666;
            font-size: 0.85rem;
            margin-top: 0.25rem;
          }

          .slider-track {
            height: 8px;
            border-radius: 4px;
            background: #e0e0e0;
            position: relative;
            transition: background 0.2s ease;
          }

          .slider-thumb {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: grab;
            outline: none;
          }

          .slider-thumb:active {
            cursor: grabbing;
          }

          .slider-value {
            position: absolute;
            top: -2.5rem;
            left: 50%;
            transform: translateX(-50%);
            font-size: 0.85rem;
            font-weight: 600;
            color: #ff6600;
            background: #fff;
            padding: 0.3rem 0.6rem;
            border-radius: 4px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
            white-space: nowrap;
            transition: all 0.2s ease;
          }

          .slider-thumb,
          .slider-value {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .slider-thumb:hover {
            box-shadow: 0 4px 10px rgba(255, 102, 0, 0.3);
            border-color: #e65c00;
          }

          .slider-thumb:focus {
            outline: none;
            box-shadow: 0 0 0 4px rgba(255, 102, 0, 0.2);
          }

          .estimation-section {
            background: #fff9f2;
            padding: 2rem;
            text-align: left;
            top: 2rem;
            max-width: 400px;
            border-radius: 1rem;
          }

          .estimation-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 1rem;
          }

          .estimation-cost {
            font-size: 2rem;
            font-weight: 700;
            color: #ff6600;
            margin-bottom: 0.5rem;
          }

          .estimation-disclaimer {
            font-size: 0.9rem;
            color: #666;
            margin-bottom: 1rem;
          }

          .estimation-promo {
            font-size: 1.1rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 1rem;
          }

          .estimation-benefits {
            list-style: none;
            padding: 0;
            margin-bottom: 1rem;
            text-align: left;
            display: inline-block;
          }

          .estimation-benefits li {
            font-size: 1rem;
            color: #333;
            margin-bottom: 0.5rem;
          }

          .estimation-benefits li i {
            color: #fd6601;
          }

          .estimation-cta {
            font-size: 1rem;
            color: #666;
            margin-bottom: 1.5rem;
          }

          .estimation-btn {
            background: linear-gradient(90deg, #ff6600, #e65c00);
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            color: #fff;
            transition: all 0.3s ease;
            box-shadow: 0 2px 10px rgba(255, 102, 0, 0.3);
          }

          .estimation-btn:hover {
            background: linear-gradient(90deg, #e65c00, #cc5200);
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(255, 102, 0, 0.5);
          }

          .submit-btn {
            background: linear-gradient(90deg, #ff6600, #e65c00);
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            color: #fff;
            text-transform: uppercase;
            transition: all 0.3s ease;
            box-shadow: 0 2px 10px rgba(255, 102, 0, 0.3);
          }

          .submit-btn:hover {
            background: linear-gradient(90deg, #e65c00, #cc5200);
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(255, 102, 0, 0.5);
          }

          .info-modal-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1050;
          }

          .info-modal {
            background: #fff;
            padding: 2rem;
            border-radius: 12px;
            width: 90%;
            max-width: 500px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            border: 1px solid #ff6600;
            animation: slideUp 0.3s ease-in-out;
          }

          .info-modal-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #ff6600;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
          }

          .info-modal-content {
            font-size: 1rem;
            color: #333;
            line-height: 1.6;
            white-space: pre-line;
          }

          .info-modal-close-btn {
            background: #ff6600;
            border: none;
            padding: 0.5rem 1.5rem;
            border-radius: 8px;
            font-size: 1rem;
            color: #fff;
            transition: all 0.3s ease;
            margin-top: 1rem;
          }

          .info-modal-close-btn:hover {
            background: #e65c00;
            transform: scale(1.05);
          }

          @media (max-width: 991px) {
            .estimation-section {
              position: static;
              margin-top: 2rem;
            }
            .service-card {
              padding: 1rem;
            }
            .form-control {
              padding: 0.5rem;
            }
            .blog-title {
              font-size: 1.75rem;
            }
            .blog-content {
              font-size: 1rem;
            }
            .blog-image {
              margin-top: 2rem;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default PriceCalculator;