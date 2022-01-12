import React from "react";
import {Text, Image, View } from 'react-native';
import { Card } from 'react-native-paper';
import styled from "styled-components/native";
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star.js';
import open from '../../../../assets/open.js';
import { Spacer } from "../../../components/spacer/spacer.component.js";

const RestaurantCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
	padding: ${(props) => props.theme.space[3]};
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
	font-family: ${(props) => props.theme.fonts.heading};
	font-weight: ${(props) => props.theme.fontWeights.bold};
	color: ${(props) => props.theme.colors.ui.primary};
	font-size: ${(props) => props.theme.fontSizes.body}
`;

const Address = styled.Text`
	font-family: ${(props) => props.theme.fonts.body};
	font-size: ${(props) => props.theme.fontSizes.caption}
`;

const Info = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
	flex-direction: row;
	padding-top: ${(props) => props.theme.space[2]};
	padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
	flex-direction: row;
	align-items: center;
`;

const SectionEnd = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: flex-end;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {

	const {
		name = 'Some Restaurant',
		icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
		photos = ['https://picsum.photos/700'],
		address = '100 some random street',
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily= true
	} = restaurant;

	const ratingArray = Array.from(new Array(Math.floor(rating)));

	return (
		<>
			<RestaurantCard elevation={5}>
				<RestaurantCardCover source={{ uri: photos[0] }} />

				<Info>
					<Title>
						{name}
					</Title>

					<Section>
						<Rating>
							{ratingArray.map(() => (
								<SvgXml xml={star} width={20} height={20}></SvgXml>
							))}
						</Rating>

						<SectionEnd>
							{isClosedTemporarily && <Text variant="label" style={{color: "red"}}>COSED TEMPORARILY</Text>}

							<Spacer position="left" size="large" />
							{isOpenNow && <SvgXml xml={open} width={20} height={20}></SvgXml>}

							<Spacer position="left" size="large" />
							<Image style={{width: 15, height: 15}} source={{uri: icon}} />
						</SectionEnd>
					</Section>

					<Address>
						{address}
					</Address>
				</Info>

			</RestaurantCard>
		</>
	);

};