// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Footer → Items*
 */
export interface FooterDocumentDataItemsItem {
	/**
	 * Link field in *Footer → Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: footer.items[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;
}

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
	/**
	 * Items field in *Footer*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: footer.items[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	items: prismic.GroupField<Simplify<FooterDocumentDataItemsItem>>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<FooterDocumentData>,
	'footer',
	Lang
>;

type PageDocumentDataSlicesSlice = LogosSlice | ShopSlice | OpenerSlice | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<PageDocumentData>,
	'page',
	Lang
>;

export type AllDocumentTypes = FooterDocument | PageDocument;

/**
 * Item in *Logos → Default → Primary → Items*
 */
export interface LogosSliceDefaultPrimaryItemsItem {
	/**
	 * Image field in *Logos → Default → Primary → Items*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: logos.default.primary.items[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Link field in *Logos → Default → Primary → Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: logos.default.primary.items[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;
}

/**
 * Primary content in *Logos → Default → Primary*
 */
export interface LogosSliceDefaultPrimary {
	/**
	 * Headline field in *Logos → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: logos.default.primary.headline
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	headline: prismic.KeyTextField;

	/**
	 * Items field in *Logos → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: logos.default.primary.items[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	items: prismic.GroupField<Simplify<LogosSliceDefaultPrimaryItemsItem>>;
}

/**
 * Default variation for Logos Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LogosSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<LogosSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Logos*
 */
type LogosSliceVariation = LogosSliceDefault;

/**
 * Logos Shared Slice
 *
 * - **API ID**: `logos`
 * - **Description**: Logos
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LogosSlice = prismic.SharedSlice<'logos', LogosSliceVariation>;

/**
 * Primary content in *Opener → Default → Primary*
 */
export interface OpenerSliceDefaultPrimary {
	/**
	 * Text field in *Opener → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: opener.default.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	text: prismic.KeyTextField;
}

/**
 * Default variation for Opener Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OpenerSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<OpenerSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Opener*
 */
type OpenerSliceVariation = OpenerSliceDefault;

/**
 * Opener Shared Slice
 *
 * - **API ID**: `opener`
 * - **Description**: Opener
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OpenerSlice = prismic.SharedSlice<'opener', OpenerSliceVariation>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
	/**
	 * Content field in *RichText → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Lorem ipsum...
	 * - **API ID Path**: rich_text.default.primary.content
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<RichTextSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<'rich_text', RichTextSliceVariation>;

/**
 * Item in *Shop → Default → Primary → Items*
 */
export interface ShopSliceDefaultPrimaryItemsItem {
	/**
	 * Image field in *Shop → Default → Primary → Items*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: shop.default.primary.items[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Text field in *Shop → Default → Primary → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: shop.default.primary.items[].text
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	text: prismic.KeyTextField;

	/**
	 * More Info field in *Shop → Default → Primary → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: shop.default.primary.items[].more_info
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	more_info: prismic.RichTextField;

	/**
	 * Product ID field in *Shop → Default → Primary → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: shop.default.primary.items[].shop_code
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	shop_code: prismic.KeyTextField;
}

/**
 * Primary content in *Shop → Default → Primary*
 */
export interface ShopSliceDefaultPrimary {
	/**
	 * Add To Cart Text field in *Shop → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: shop.default.primary.add_to_cart_text
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	add_to_cart_text: prismic.KeyTextField;

	/**
	 * Items field in *Shop → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: shop.default.primary.items[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	items: prismic.GroupField<Simplify<ShopSliceDefaultPrimaryItemsItem>>;
}

/**
 * Default variation for Shop Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShopSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ShopSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Shop*
 */
type ShopSliceVariation = ShopSliceDefault;

/**
 * Shop Shared Slice
 *
 * - **API ID**: `shop`
 * - **Description**: Shop
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShopSlice = prismic.SharedSlice<'shop', ShopSliceVariation>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	interface CreateWriteClient {
		(
			repositoryNameOrEndpoint: string,
			options: prismic.WriteClientConfig
		): prismic.WriteClient<AllDocumentTypes>;
	}

	interface CreateMigration {
		(): prismic.Migration<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			FooterDocument,
			FooterDocumentData,
			FooterDocumentDataItemsItem,
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			AllDocumentTypes,
			LogosSlice,
			LogosSliceDefaultPrimaryItemsItem,
			LogosSliceDefaultPrimary,
			LogosSliceVariation,
			LogosSliceDefault,
			OpenerSlice,
			OpenerSliceDefaultPrimary,
			OpenerSliceVariation,
			OpenerSliceDefault,
			RichTextSlice,
			RichTextSliceDefaultPrimary,
			RichTextSliceVariation,
			RichTextSliceDefault,
			ShopSlice,
			ShopSliceDefaultPrimaryItemsItem,
			ShopSliceDefaultPrimary,
			ShopSliceVariation,
			ShopSliceDefault
		};
	}
}
