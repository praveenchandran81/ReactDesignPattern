import { RegularList } from "./RegularList";
import { people } from "./people/people";
import { SmallListItemPerson } from "./people/SmallListItemPerson";
import { LargeListItemPerson } from "./people/LargeListItemPerson";
import { product } from "./product/product";
import { SmallListItemProduct } from "./product/SmallListitemProduct";
import { LargeListItemProduct } from "./product/LargeListItemProduct";

export const ListItemApp = () => {
  return (
    <div>
      <RegularList
        items={people}
        resourceName="people"
        itemComponent={SmallListItemPerson}
      ></RegularList>

      <RegularList
        items={people}
        resourceName="people"
        itemComponent={LargeListItemPerson}
      ></RegularList>

      <RegularList
        items={product}
        resourceName="product"
        itemComponent={SmallListItemProduct}
      ></RegularList>

        <RegularList
        items={product}
        resourceName="product"
        itemComponent={LargeListItemProduct}
      ></RegularList>
    </div>
  );
};
