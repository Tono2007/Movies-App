import { constants } from '../../utils/constants';
import moment from 'moment';
import 'moment/locale/es';
//Components
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';

function ReviewCard({ review }) {
  return (
    <Stack key={review.id} bgcolor="background.paper" p={2} gap={2}>
      <Stack direction="row" gap={2} alignItems="center">
        <Avatar
          src={`${constants.api.site}/h632${review.author_details?.avatar_path}`}
          sx={{ width: 70, height: 70 }}
        />
        <Stack flexGrow={1} justifyContent="center">
          <Typography variant="h6">{review.author}</Typography>
          <Stack direction="row" alignItems="center">
            <Rating
              value={review.author_details.rating}
              precision={0.5}
              max={10}
              size="small"
              readOnly
            />
            <Avatar
              sx={{
                bgcolor: 'primary.main',
                width: 15,
                height: 15,
                ml: 1,
              }}
            >
              <Typography variant="subtitle2" fontSize={10} color="textPrimary">
                {review.author_details.rating}
              </Typography>
            </Avatar>
          </Stack>
        </Stack>
        <Typography
          color="textSecondary"
          variant="subtitle2"
          component="a"
          href={review.url}
          target="_blank"
          rel="noreferrer noopener"
          alignSelf="self-start"
        >
          {moment(review.created_at).format('LL')}
        </Typography>
      </Stack>
      <Typography variant="body2">{review.content}</Typography>
    </Stack>
  );
}

export default ReviewCard;
