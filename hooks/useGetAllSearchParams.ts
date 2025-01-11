import { useSearchParams } from 'next/navigation';

const useGetAllSearchParams = () => {
  const searchParams = useSearchParams();
  const params: { [anyProp: string]: string } = {};

  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  return searchParams;
};
export default useGetAllSearchParams;
