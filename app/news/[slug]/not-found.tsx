import ErrorState from '@/components/ErrorState';

export default function NotFound() {
  return (
    <ErrorState
      title="Article Not Found"
      message="The article you're looking for doesn't exist or has been removed."
      showHomeLink={true}
    />
  );
}
