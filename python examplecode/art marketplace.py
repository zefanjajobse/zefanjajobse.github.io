# make a list for info of a art pieces
class Art:
  def __init__(self, artist, title, medium, year, owner):
    self.artist = artist
    self.title = title
    self.medium = medium
    self.year = year
    self.owner = owner
  def __repr__(self):
    return "{}. \"{}\". {}, {}. {}, {}.".format(self.artist, self.title, self.year, self.medium, self.owner.name, self.owner.location)

# make a marketplace with the lisings it has
class Marketplace:
  def __init__(self):
    self.listings = []
  def add_listing(self, new_listing):
    self.listings.append(new_listing)
  def remove_listing(self, remove_listing):
    self.listings.remove(remove_listing)
  def show_listings(self):
    for item in self.listings:
      print(item)

# create a client and add a location
class Client:
  def __init__(self, name, location, is_museum, wallet):
    self.name = name
    self.is_museum = is_museum
    if is_museum:
      self.location = location
    else:
      self.location = "Private Collection"
    self.wallet = wallet
    self.wishlist = []
  def sell_artwork(self, artwork, price):
    if self == artwork.owner:
      self.wallet += price
      new_listing = Listing(artwork.title, price, self)
      veneer.add_listing(new_listing)
  def buy_artwork(self, artwork):
    if self != artwork.owner:
      for listing in veneer.listings:
        if artwork.title == listing.art:
          if self.wallet >= listing.price:
            self.wallet -= listing.price
            art_listing = artwork
            artwork.owner = self
            veneer.remove_listing(listing)
  def wishlist(self):
    print(wishlist)
  def add_wishlist(self, artwork):
    if self != artwork.owner:
      for listing in veneer.listings:
        if artwork.title == listing.art:
          wishlist.append(artwork.title)
  def remove_wishlist(self, artwork):
    for listing in veneer.listings:
      if artwork.title == listing.art:
        wishlist.remove(artwork.title)

class Listing:
  def __init__(self, art, price, seller):
    self.art = art
    self.price = price
    self.seller = seller
  def __repr__(self):
    return "{}, ${}M (USD)".format(self.art, self.price)

# initiate and show the marketplace
veneer = Marketplace()

# clients
edytta = Client("Edytta Halpirt", "", False, 9)
moma = Client("The MOMA", "New York", True, 9)

# art in the museum
girl_with_mandolin = Art("Picasso, Pablo", "Girl with a Mandolin (Fanny Tellier)", "oil on canvas", "1910", edytta)

# sell art
edytta.sell_artwork(girl_with_mandolin, 6)

# buy art
moma.buy_artwork(girl_with_mandolin)

#test print
veneer.show_listings()
print(girl_with_mandolin)
