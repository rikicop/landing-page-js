import React from 'react';
//import { Container } from '../../globalStyles';
import {
    Container,
    FeatureText,
    FeatureSection,
    FeatureTitle,
    FeatureWrapper,
    FeatureColumn,
    FeatureImageWrapper,
    FeatureName,
    FeatureTextWrapper,
} from './FeaturesElements';

import { featuresData } from '../../data/FeaturesData';

const Features = () => {
    return (
        <FeatureSection id="servicios">
            <Container>
                <FeatureTextWrapper>
                    <FeatureTitle>Servicios</FeatureTitle>
                </FeatureTextWrapper>
                <FeatureWrapper>
                    {featuresData.map((el, index) => (
                        <FeatureColumn key={index}>
                            <FeatureImageWrapper className={el.imgClass}>
                                {el.icon}
                            </FeatureImageWrapper>
                            <FeatureName>{el.name}</FeatureName>
                            <FeatureText>{el.description}</FeatureText>
                        </FeatureColumn>
                    ))}
                </FeatureWrapper>
            </Container>
        </FeatureSection>
    );
};

export default Features;