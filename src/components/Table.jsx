function Table() {
  return (
    <div className="min-w-full overflow-auto">
      <table className="min-w-full text-primary-text text-sm text-left">
        <thead className="border-b-[1px] border-btn-100 text-stone-400">
          <tr>
            <Th>Customer Name</Th>
            <Th>Address</Th>
            <Th>Products</Th>
            <Th>Cost</Th>
            <Th>Date</Th>
          </tr>
        </thead>
        <tbody>
          <Row
            name="John Doe"
            address="123, Lorem Ipsum"
            products="2"
            cost="$ 100"
            date="12/12/2021"
          />
          <Row
            name="John Doe"
            address="123, Lorem Ipsum"
            products="2"
            cost="$ 100"
            date="12/12/2021"
          />
          <Row
            name="John Doe"
            address="123, Lorem Ipsum"
            products="2"
            cost="$ 100"
            date="12/12/2021"
          />
          <Row
            name="John Doe"
            address="123, Lorem Ipsum"
            products="2"
            cost="$ 100"
            date="12/12/2021"
          />
          <Row
            name="John Doe"
            address="123, Lorem Ipsum"
            products="2"
            cost="$ 100"
            date="12/12/2021"
          />
          <Row
            name="John Doe"
            address="123, Lorem Ipsum"
            products="2"
            cost="$ 100"
            date="12/12/2021"
          />
          <Row
            name="John Doe"
            address="123, Lorem Ipsum"
            products="2"
            cost="$ 100"
            date="12/12/2021"
          />
          <Row
            name="John Doe"
            address="123, Lorem Ipsum"
            products="2"
            cost="$ 100"
            date="12/12/2021"
          />
        </tbody>
      </table>
    </div>
  )
}

function Row({ name, address, products, cost, date }) {
  return (
    <tr className=" even:bg-primary-600">
      <Td>{name}</Td>
      <Td>{address}</Td>
      <Td>{products}</Td>
      <Td>{cost}</Td>
      <Td>{date}</Td>
    </tr>
  )
}

function Td({ children }) {
  return <td className="p-2 text-left">{children}</td>
}

function Th({ children }) {
  return <th className="py-1 text-left ">{children}</th>
}

export default Table
