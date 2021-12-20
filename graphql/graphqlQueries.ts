//importing gql
import { gql } from '@apollo/client';

//queries
export const advantagesQuery = gql`
  query AdvantagesQuery {
    advantages {
      title
      description
      image {
        url
        alt
        imgWidth
        imgHeight
      }
    }
  }
`;

export const companiesQuery = gql`
  query CompaniesQuery {
    assets(where: { assetType: "company" }) {
      imgWidth
      imgHeight
      id
      url
      alt
    }
  }
`;
