export type Review = {
  id: string,
  reviewMessage: string,
  date: Date,
  rating: number,
  author: ReviewAuthor
};

export type Reviews = Review[];

export type ReviewAuthor = {
  id: string,
  avatarUrl: string,
  name: string,
  isPro: boolean
};

export type Comment = {
  commentText: string,
  rating: number,
}

export type ReviewFromServer = {
  'id': string;
  'user': ReviewAuthorFromServer;
  'comment': string
  'rating': number;
  'date': Date;
}

export type ReviewsFromServer = ReviewFromServer[];

export type ReviewAuthorFromServer = {
  'id': string;
  'name': string;
  'avatar_url': string;
  'is_pro': boolean;
}

export const adaptReviewToClient = (data: ReviewFromServer): Review => ({
  id: data['id'],
  reviewMessage: data['comment'],
  date: data['date'],
  rating: data['rating'],
  author: {
    id: data['user']['id'],
    avatarUrl: data['user']['avatar_url'],
    name: data['user']['name'],
    isPro: data['user']['is_pro'],
  },
});

export const getAdaptedComments = (data: ReviewsFromServer): Reviews => data.map(adaptReviewToClient);
