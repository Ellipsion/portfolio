import React from 'react';
import { NavLink } from 'react-router-dom';

import Card from './Card';
import WidgetButton from 'components/buttons/WidgetButton';
import Tooltip from 'components/tooltip';

import { LuCode2 } from "react-icons/lu"
import servicesData from "cms/services.json"

const ServicesSection = () => {
    return (
        <div className='flex flex-col gap-5 '>
            <div className='flex justify-between items-start mt-2'>
                <p className='text-normal font-medium'>What I do</p>
                <NavLink to="/skills">
                    <Tooltip name={"Skills"}>
                        <WidgetButton Icon={LuCode2} />
                    </Tooltip>
                </NavLink>
            </div>

            <div className='mt-5 flex flex-wrap gap-3 justify-center sm:justify-normal'>
                {servicesData.services.map((service, idx) => <Card key={`services-${idx}`} service={service} type="service" />)}
            </div>
        </div>
    );
}

export default ServicesSection;
