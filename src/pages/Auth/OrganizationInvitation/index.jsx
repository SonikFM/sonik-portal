import Loading from "@/components/Loading";
import { verifyOrganizationInvitationToken } from "@/store/global/actions";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const OrganizationInvitation = () => {
  const { isLoading, error, user } = useSelector(state => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    verifyToken();
  }, []);

  const verifyToken = () => {
    if (!user)
      return navigate(
        `/login?redirect=/organization-invitation/${params.token}`,
      );
    dispatch(verifyOrganizationInvitationToken({ token: params.token }));
    if (error) toast.error(error.message);
    navigate("/dashboard");
  };

  if (!isLoading) return <Loading />;
};

export default OrganizationInvitation;
