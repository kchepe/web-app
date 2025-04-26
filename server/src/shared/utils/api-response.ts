type ApiSuccess<T> = {
  success: true;
  message: string;
  data: T;
};

type ApiError = {
  success: false;
  message: string;
  errors?: Record<string, string>;
};

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

export function successResponse<T>(message: string, result: T): ApiSuccess<T> {
  return {
    success: true,
    message,
    data: result,
  };
}

export function errorResponse(message: string, errors?: Record<string, string>): ApiError {
  return {
    success: false,
    message,
    errors,
  };
}
