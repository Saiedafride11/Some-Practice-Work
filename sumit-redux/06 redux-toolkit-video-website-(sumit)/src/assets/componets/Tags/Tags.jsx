import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../redux/features/tags/tagsSlice";
import Error from "../ui/Error";
import Loading from "../ui/Loading";
import Tag from "./Tag";

const Tags = () => {
  const { tags, isLoading, isError, error } = useSelector(
    (state) => state.tags
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error error={error} />;
  }
  if (!isLoading && !isError && tags.length === 0) {
    content = <div className="col-span-12">No tags found!</div>;
  }
  if (!isLoading && !isError && tags.length > 0) {
    content = tags?.map((tag) => <Tag key={tag.id} tag={tag} />);
  }

  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {content}
      </div>
    </section>
  );
};

export default Tags;
