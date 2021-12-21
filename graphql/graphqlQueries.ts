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

export const achievementsQuery = gql`
  query AchievementsQuery {
    achievements {
      title
      result
      resultType
      borderLeft
    }
  }
`;

export const servicesQuery = gql`
  query ServicesQuery {
    services {
      isSpecial
      listItems
      price
      serviceType
    }
  }
`;
