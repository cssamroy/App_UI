import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import ListItemText from '@mui/material/ListItemText';
import { formatLocation } from "../../utils/formatters";
import { Typography } from "@mui/material";
import BusinessResponse from "../../interfaces/BusinessResponse";
import { useEffect, useState } from "react";
import getReviews from "../../services/getReviews";
import ReviewResponse from "../../interfaces/ReviewResponse";

interface Props {
  business: BusinessResponse;
  includeReview?: boolean;
}

const BusinessListing: React.FC<Props> = ({ business, includeReview = false }) => {
  const [reviews, setReviews] = useState<Array<ReviewResponse> | null>(null);

  useEffect(() => {
    if (includeReview) {
      (async () => {
        const { id } = business;
        const response = await getReviews({ id });
        setReviews(response.reviews);
      })();
    }
  }, [business, includeReview]);

  return (
    <Card sx={{ my: 2 }}>
      <CardHeader
        title={business.name}
        subheader={formatLocation(business.location)}
      />
      {includeReview && (
        <CardContent>
          <Typography sx={{ fontWeight: 'bold' }}>{"Reviews"}</Typography>
          {includeReview && !reviews && "No reviews found!"}
          {reviews && (
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {reviews.map(review => (
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={review.user.name} src={review.user.image_url || ''} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Chip label={`★ ${review.rating}`} color="primary" variant="outlined" />
                    }
                    secondary={
                      <>
                        <Typography
                          sx={{ display: 'inline', mr: 1, fontWeight: 'bold' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {review.time_created}:
                        </Typography>
                        {review.text}
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          )}
        </CardContent>
      )}
    </Card>
  )
}

export default BusinessListing;
