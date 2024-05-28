import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div className="px-10 p-5">
      <div>
        <h2 className="text-5xl">Total Payments: {payments.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Price</th>
              <th>Transaction Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index)=><tr key={payment._id}>
              <th>{index + 1}</th>
              <td>$ {payment.price}</td>
              <td>{payment.transactionId}</td>
              <td><span className="badge-primary  px-2 py-1 rounded-full">{payment.status}</span></td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
