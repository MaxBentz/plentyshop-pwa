import { Context, NewsletterParams } from 'src/types';

export async function subscribeNewsletter(context: Context, params: NewsletterParams): Promise<string> {
  const url: URL = new URL('/rest/io/customer/newsletter', context.config.api.url);

  const { data } = await context.client.post(url.href, params);

  return data;
}

export async function unsubscribeNewsletter(context: Context, params: NewsletterParams): Promise<string> {
  const url: URL = new URL('/rest/io/customer/newsletter/' + params.email, context.config.api.url);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { data } = await context.client.delete(url.href, params);

  return data;
}