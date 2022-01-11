import React from "react";
import { Card } from 'react-native-paper';
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
	padding: ${(props) => props.theme.space[3]};
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
	font-family: ${(props) => props.theme.fonts.body};
	padding: ${(props) => props.theme.space[3]};
	font-weight: ${(props) => props.theme.fontWeights.bold};
	color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {

	const {
		name = 'Some Restaurant',
		icon,
		photos = ['https://picsum.photos/700'],
		address = '100 some random street',
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily
	} = restaurant;

	return (
		<>
			<RestaurantCard elevation={5}>
				<RestaurantCardCover source={{ uri: photos[0] }} />

				<Title>
					{name}
				</Title>
			</RestaurantCard>
		</>
	);

};