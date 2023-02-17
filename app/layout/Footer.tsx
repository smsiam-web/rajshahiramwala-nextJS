import React from "react";
import FooterCard from "../components/FooterCard";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white border-t text-mid">
      <div className="container">
        {/* footer infos */}
        <div className="flex flex-wrap justify-between items-center gap-8 border-b py-12">
          <FooterCard
            image="/icons/icon_rocket.svg"
            title="Free Shipping"
            subTitle="For all orders over $200"
          />
          <FooterCard
            image="/icons/icon_reload.svg"
            title="1 & 1 Returns"
            subTitle="Cancellation after 1 day"
          />
          <FooterCard
            image="/icons/icon_protect.svg"
            title="100% Secure Payment"
            subTitle="Gurantee secure payments"
          />
          <FooterCard
            image="/icons/icon_support.svg"
            title="24/7 Dedicated Support"
            subTitle="Anywhere & anytime"
          />
          <FooterCard
            image="/icons/icon_tag.svg"
            title="Daily Offers"
            subTitle="Discount up to 70% OFF"
          />
        </div>
        {/* footer widgets */}
        <div className="flex flex-wrap pt-20 pb-12 border-b items-stretch justify-between transition-all">
          <div className="max-w-sm xl:max-w-md mb-12">
            <h4 className="footer-title">
              Farmart – Your Online Foods & Grocery
            </h4>
            <div className="flex flex-col gap-3">
              <p className="pb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                finibus viverra iaculis. Etiam vulputate et justo eget
                scelerisque.
              </p>
              {/* contact  */}
              <a href="tel:+8801837666008" className="mb-4">
                <div className="flex gap-3 items-stretch">
                  <img
                    src="/icons/phone.svg"
                    alt="phone"
                    className="w-4 pb-6"
                  />
                  <div>
                    <p>Hotline 24/7:</p>
                    <span className="font-bold">(+965) 7492-4277</span>
                  </div>
                </div>
              </a>
              {/* address  */}
              <div className="flex gap-3 items-center">
                <img src="/icons/home.svg" alt="phone" className="w-4" />
                <address>959 Homestead Street Eastlake, NYC</address>
              </div>
              {/* email  */}
              <a href="mailto:smsiam696@gmail.com">
                <div className="flex gap-3 items-center">
                  <img src="/icons/envelop.svg" alt="phone" className="w-4" />
                  <p>support@farmart.com</p>
                </div>
              </a>
            </div>
          </div>
          {/* links */}
          <div className="flex flex-wrap gap-8 items-stretch md:justify-between max-w-[500px] md:w-full mb-12">
            <div>
              <h4 className="footer-title">Useful Links</h4>
              <div className="flex flex-col gap-4 text-base">
                <Link href={"/about-us-new"} legacyBehavior>
                  <a href="/about-us-new">About Us</a>
                </Link>
                <Link href={"/contact-us-new"} legacyBehavior>
                  <a href="/contact-us-new">Contact</a>
                </Link>
                <Link href={"/faqs"} legacyBehavior>
                  <a href="/faqs">Help Center</a>
                </Link>
                <Link href={"/become-a-vendor"} legacyBehavior>
                  <a href="/become-a-vendor">Career</a>
                </Link>
                <Link href={"/refund-return"} legacyBehavior>
                  <a href="/refund-return">Policy</a>
                </Link>
                <Link href={"/flash-sale"} legacyBehavior>
                  <a href="/flash-sale">Flash Sale</a>
                </Link>
                <Link href={"/order-tracking"} legacyBehavior>
                  <a href="/order-tracking">Order Tracking</a>
                </Link>
                <Link href={"/contact-us-new"} legacyBehavior>
                  <a href="/contact-us-new">Sitemap</a>
                </Link>
              </div>
            </div>
            <div className="">
              <h4 className="footer-title">Help Center</h4>
              <div className="flex flex-col gap-4 text-base">
                <Link href={"/terms-of-service"} legacyBehavior>
                  <a href="/terms-of-service">Payments</a>
                </Link>
                <Link href={"/shipping"} legacyBehavior>
                  <a href="/shipping">Shipping</a>
                </Link>
                <Link href={"/contact-us-new"} legacyBehavior>
                  <a href="/contact-us-new">Product Returns</a>
                </Link>
                <Link href={"/faqs"} legacyBehavior>
                  <a href="/faqs">FAQ</a>
                </Link>
                <Link href={"/checkout"} legacyBehavior>
                  <a href="/checkout">Checkout</a>
                </Link>
                <Link href={"/refund-return"} legacyBehavior>
                  <a href="/refund-return">Other Issues</a>
                </Link>
              </div>
            </div>
            <div className="">
              <h4 className="footer-title">Farmart Business</h4>
              <div className="flex flex-col gap-4 text-base">
                <Link href={"/store-listing"} legacyBehavior>
                  <a href="/store-listing">Sell On Farmart</a>
                </Link>
                <Link href={"/shipping"} legacyBehavior>
                  <a href="/shipping">Affiliate Program</a>
                </Link>
                <Link href={"/shop-all-brands"} legacyBehavior>
                  <a href="/shop-all-brands">Our Suppliers</a>
                </Link>
                <Link href={"/flash-sell"} legacyBehavior>
                  <a href="/flash-sell">Accessibility</a>
                </Link>
                <Link href={"/contact-us-new"} legacyBehavior>
                  <a href="/contact-us-new">Advertise With Us</a>
                </Link>
              </div>
            </div>
          </div>
          {/* subscribe  */}
          <div className="max-w-sm">
            <h4 className="footer-title">Farmart Newsletter</h4>
            <p className="pb-6">
              Register now to get updates on promotions and coupns. Don’t worry!
              We not spam
            </p>
            <div className="flex rounded-[3px] max-w-full overflow-hidden">
              <div className="flex border p-3 w-fit">
                <img
                  src="/icons/envelop_dark.svg"
                  alt="envelop_icon"
                  className="px-3 hidden sm:block"
                />
                <input
                  type="email"
                  placeholder="Your email..."
                  className="placeholder:text-sm focus:outline-0"
                />
              </div>
              <button className="bg-primary text-title px-5 text-sm text-center font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* footer bottom */}
        <footer className="py-9 gap-4 flex xl:flex-row flex-col justify-between">
          {/* copyright  */}
          <h4>
            ©{new Date().getFullYear()}{" "}
            <a
              href="mailto:smsiam696@gmail.com"
              className="font-bold"
              target={"blank"}
              rel={"noreferrer"}
            >
              SM.Devware
            </a>{" "}
            All rights reserved.
          </h4>
          {/* payment icons  */}
          <img
            src="/images/footer-new-payment.png"
            alt="payment_icons"
            className="w-[345px]"
          />
          {/* all social links */}
          <div className="flex gap-6 items-center">
            <h6>Stay connected:</h6>
            <Link href={"#"} legacyBehavior>
              <a href="#">
                <img
                  src="/icons/facebook.svg"
                  alt="facebook_logo"
                  className="w-3"
                />
              </a>
            </Link>
            <Link href={"#"} legacyBehavior>
              <a href="#">
                <img
                  src="/icons/twitter.svg"
                  alt="twitter_logo"
                  className="w-4"
                />
              </a>
            </Link>
            <Link href={"#"} legacyBehavior>
              <a href="#">
                <img
                  src="/icons/instagram.svg"
                  alt="instagram_logo"
                  className="w-4"
                />
              </a>
            </Link>
            <Link href={"#"} legacyBehavior>
              <a href="#">
                <img
                  src="/icons/pinterest.svg"
                  alt="pinterest_logo"
                  className="w-4"
                />
              </a>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
