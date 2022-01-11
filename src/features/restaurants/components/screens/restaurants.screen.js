import React from "react";
import { StatusBar } from 'react-native';
import SearchBar from "../../../../components/SearchBar";
import { RestaurantInfoCard } from "../restaurant-info-card.component";
import styled from "styled-components/native";

const SafeView = styled.SafeAreaView`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const List = styled.View`
		background-color: ${(props) => props.theme.colors.bg.primary};
		padding: ${(props) => props.theme.space[3]};
		flex: 1;
`;

export const RestaurantsScreen = () => (
	<SafeView>
		<SearchContainer>
			<SearchBar />
		</SearchContainer>

		<List>
			<RestaurantInfoCard></RestaurantInfoCard>
		</List>
	</SafeView>
);