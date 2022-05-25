import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import BusinessResponse from "../../interfaces/BusinessResponse";
import getBusiness from "../../services/getBusiness";
import BusinessItem from "../BusinessItem";
import Loader from "../Loader";

interface Props {
  limit: number;
  location: string;
  term?: string;
  category?: string;
}

const BusinessList: React.FC<Props> = ({ limit, location, term = '', category = null }) => {

  const [businesses, setBusinesses] = useState<Array<BusinessResponse> | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await getBusiness({ limit, location, term, category });
        setBusinesses(response.businesses);
      } catch {
        setBusinesses(null);
      }
      setIsLoading(false);
    })();
  }, [limit, location, term, category]);

  return (
    <Box sx={{ backgroundColor: 'aliceblue' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" sx={{ my: 2 }}>
            Top {limit} {term} {category} restaurants in {location}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className="list-container" sx={{ my: 0 }} >
        <Grid item xs={10} md={12}>
          {isLoading && <Loader />}
          {!isLoading && !businesses?.length && (
            <p>No results found</p>
          )}
          {!isLoading && businesses && businesses.map((business) =>
            <BusinessItem
              key={business.id}
              business={business}
              includeReview
            />
          )}
        </Grid>
      </Container>
    </Box>
  )
}

export default BusinessList;
