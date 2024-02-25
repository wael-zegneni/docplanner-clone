import React from "react";

const ServiceItem = ({icon, title, description, backgroundColor, options}) => (
    <div className={`service-item service-item--${backgroundColor}`}>
        <div>
            <div className="service-item__icon">
                <img src={icon} alt={`${title} icon`} />
            </div>
            <h1 className="service-item__title">{title}</h1>
            <h2 className="service-item__description">{description}</h2>
        </div>
        <div className="service-item__select">
            <select className="custom-select" data-id="domain-switcher">
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    </div>
);

export default ServiceItem;
