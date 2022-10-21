import React from 'react';
import RepositoryList from "../../components/RepositoriesList/RepositoryList";
import { render, within } from '@testing-library/react-native';
import {getNumber} from "../../components/RepositoriesList/StatsBlock";
import '@testing-library/jest-native/extend-expect';


describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const repositories = {
                totalCount: 8,
                pageInfo: {
                    hasNextPage: true,
                    endCursor:
                        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                    {
                        node: {
                            id: 'jaredpalmer.formik',
                            fullName: 'jaredpalmer/formik',
                            description: 'Build forms in React, without the tears',
                            language: 'TypeScript',
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars2.githubusercontent.com/u/4060187?v=4',
                        },
                        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                    },
                    {
                        node: {
                            id: 'async-library.react-async',
                            fullName: 'async-library/react-async',
                            description: 'Flexible promise-based React data loader',
                            language: 'JavaScript',
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars1.githubusercontent.com/u/54310907?v=4',
                        },
                        cursor:
                            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    },
                ],
            };

            // eslint-disable-next-line no-unused-vars
            const { debug, getAllByTestId } = render(<RepositoryList repositories={repositories}/>);

            const arrayTransformed = repositories.edges.map(e => e.node)
            const [first, second] = arrayTransformed;

            const repositoryItems = getAllByTestId('repositoryItem');

            expect(repositoryItems).toHaveLength(2)

            const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;


            expect(firstRepositoryItem).toHaveTextContent(first.fullName);
            expect(secondRepositoryItem).toHaveTextContent(second.fullName);

            expect(firstRepositoryItem).toHaveTextContent(first.description);
            expect(secondRepositoryItem).toHaveTextContent(second.description);

            expect(firstRepositoryItem).toHaveTextContent(first.language);
            expect(secondRepositoryItem).toHaveTextContent(second.language);

            expect(firstRepositoryItem).toHaveTextContent(`${getNumber(first.stargazersCount)}`);
            expect(secondRepositoryItem).toHaveTextContent(`${getNumber(second.stargazersCount)}`);

            expect(firstRepositoryItem).toHaveTextContent(`${getNumber(first.forksCount)}`);
            expect(secondRepositoryItem).toHaveTextContent(`${getNumber(second.forksCount)}`);

            expect(firstRepositoryItem).toHaveTextContent(`${getNumber(first.ratingAverage)}`);
            expect(secondRepositoryItem).toHaveTextContent(`${getNumber(second.ratingAverage)}`);

            expect(firstRepositoryItem).toHaveTextContent(`${getNumber(first.reviewCount)}`);
            expect(secondRepositoryItem).toHaveTextContent(`${getNumber(second.reviewCount)}`);
        });
    });
});