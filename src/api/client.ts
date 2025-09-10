import { AxiosApiClient } from './axiosClient';

export interface BookingPayload {
	name: string;
	surname: string;
	email: string;
	phoneNumber: string;
	startDate?: Date | null;
	endDate?: Date | null;
	listing: string | number; // documentId is a string or number
}

export const apiClient = new AxiosApiClient({
	baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
	getToken: () => process.env.NEXT_PUBLIC_API_TOKEN || '',
});

export async function createBooking(payload: BookingPayload): Promise<unknown> {
	try {
		// Build a flat data object for Strapi
		const data: Record<string, unknown> = {
			name: payload.name,
			surname: payload.surname,
			email: payload.email,
			phoneNumber: payload.phoneNumber,
			startDate: payload.startDate ? new Date(payload.startDate).toISOString() : undefined,
			endDate: payload.endDate ? new Date(payload.endDate).toISOString() : undefined,
			   listing: payload.listing, // Send as string (documentId) or number as provided
		};
		// Remove undefined fields (Strapi will reject them)
		Object.keys(data).forEach(key => data[key] === undefined && delete data[key]);
		// Strapi expects data inside a 'data' object
		return await apiClient.request('/bookings', { method: 'post', data: { data } });
	} catch (error) {
		// Log error details for debugging
		if (typeof error === 'object' && error && 'response' in error) {
			const err = error as { response?: { status: number; data: unknown }; request?: unknown; message?: string };
			if (err.response) {
				console.error('Booking API error:', err.response.status, err.response.data);
				// Log the full error object for debugging
				console.error('Full error.response:', JSON.stringify(err.response, null, 2));
			} else if (err.request) {
				console.error('Booking API network error:', err.message);
			} else {
				console.error('Booking API unknown error:', err);
			}
		} else {
			console.error('Booking API unknown error:', error);
		}
		throw error;
	}
}
